import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TokenApi } from '../models/tokenapiModel';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private route: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getSessionToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    })
    return next.handle(request).pipe(
      catchError((e: any) => {
        if (e instanceof HttpErrorResponse) {
          if (e.status === 401) {
            this.handleUnanthorizedError(request, next);
          }
        }
        return throwError(() => new Error("Algum outro erro ocorreu."));
      })
    );
  }
  handleUnanthorizedError(req: HttpRequest<any>, next: HttpHandler) {
    let tokenApi = new TokenApi();
    tokenApi.accessToken = this.auth.getSessionToken()!;
    tokenApi.refreshToken = this.auth.getRefreshToken()!;
    return this.auth.renewToken(tokenApi).pipe(
      switchMap((data: TokenApi) => {
        this.auth.storeRefreshToken(data.refreshToken);
        this.auth.storeToken(data.accessToken);
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${data.accessToken}`,
          }
        })
        return next.handle(req);
      }),
      catchError((e: any) => {
        return throwError(() => {
          this.route.navigate(['']);
          throwError(() => { "Token inválido. " });
        })
      })
    );
  };
}

export const httpInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];