import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenApi } from 'src/app/models/tokenapiModel';
import { Observable, interval, of } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7076/api/User";
  private userPayload: any;
  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodifyToken();
  }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}/register`, userObj);
  };

  logIn(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}/authenticate`, loginObj);
  };

  signOut() {
    window.sessionStorage.clear();
    this.router.navigate(['login']);
  };

  storeToken(token: string) {
    window.sessionStorage.setItem("token", token);
  };

  getSessionToken() {
    return window.sessionStorage.getItem("token");
  }
  storeRefreshToken(refreshtoken: string) {
    window.sessionStorage.setItem("refreshtoken", refreshtoken);
  };


  getRefreshToken() {
    return window.sessionStorage.getItem("refreshtoken");
  };

  isLoggedIn(): boolean {
    return !!window.sessionStorage.getItem("token");
  };

  decodifyToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getSessionToken()!;
    return jwtHelper.decodeToken(token);
  };

  getFullName() {
    if (this.userPayload)
      return this.userPayload.unique_name;
  };

  getRole() {
    if (this.userPayload)
      return this.userPayload.role;
  };

  renewToken(tokenapi: TokenApi) {
    return this.http.post<any>(`${this.baseUrl}/refresh`, tokenapi);
  }
}
