import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getSessionToken();
    if(token !== null){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      })
    }
    return next.handle(request);
  }
}

export const httpInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];