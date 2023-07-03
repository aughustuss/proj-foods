import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPasswordModel } from 'src/app/models/ResetPasswordModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {
  private baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  sendResetPasswordLink(email: string){
    return this.http.post<any>(`${this.baseUrl}/send-reset-password/${email}`, {});
  }
  resetPassword(resetPasswordObj: ResetPasswordModel){
    return this.http.post<any>(`${this.baseUrl}/reset-password`, resetPasswordObj);
  }
}
