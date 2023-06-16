import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPasswordModel } from 'src/app/models/ResetPasswordModel';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {
  private baseUrl: string = "https://localhost:7076/api/User"
  constructor(private http: HttpClient) { }

  sendResetPasswordLink(email: string){
    return this.http.post<any>(`${this.baseUrl}/send-reset-password/${email}`, {});
  }
  resetPassword(resetPasswordObj: ResetPasswordModel){
    return this.http.post<any>(`${this.baseUrl}/reset-password`, resetPasswordObj);
  }
}
