import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor

} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let interceptedToken = localStorage.getItem("token");
    console.log(interceptedToken)
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${interceptedToken}` }
    })
    return next.handle(request);
  }
}
