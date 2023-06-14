import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, from, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.getToken().pipe(
      switchMap((token: string | null) => {
        console.log('token: ', token);
        request = request.clone({
          setHeaders: {
            Authorization: token ? `Bearer ${token}` : ''
          }
        });
        return next.handle(request);
      })
    );
  }

  private getToken(): Observable<string | null> {
    return this.auth.getToken();
  }
}

export const httpInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];