import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgToastService } from 'ng-angular-popup'
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoreService } from 'src/app/services/store/store.service';
import ValidateForm from 'src/app/helpers/validateform';
import { ResetpasswordService } from 'src/app/services/resetpassword/resetpassword.service';
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatButtonModule, RouterModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  isOpen: boolean = false;
  public resetPasswordEmail: string = '';
  public isValidEmail: boolean = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router,
    private toast: NgToastService,
    private userStore: StoreService,
    private resetPassword: ResetpasswordService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  };

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  };
  showModal() {
    this.isOpen = !this.isOpen;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.logIn(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.auth.storeToken(res.accessToken);
          this.loginForm.reset();
          this.auth.storeRefreshToken(res.refreshToken);
          const userPayload = this.auth.decodifyToken();
          this.userStore.setFullNameForStore(userPayload.unique_name);
          this.userStore.setRoleForStore(userPayload.role);
          this.toast.success({ detail: "SUCCESS.", summary: res.message, duration: 5000 });
          this.route.navigate(['']);
        },
        error: (err) => {
          this.toast.error({ detail: "ERROR.", summary: err.message, duration: 5000 });
          console.log(err);
        }
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }
  checkEmailValue(event: string) {
    const eValue = event;
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.isValidEmail = pattern.test(eValue);
    return this.isValidEmail;
  };

  confirmToSend() {
    if (this.checkEmailValue(this.resetPasswordEmail)) {
      this.resetPassword.sendResetPasswordLink(this.resetPasswordEmail).subscribe({
        next: (res) => {
          this.resetPasswordEmail = '';
          this.isOpen = !this.isOpen;
          alert("Email enviado com sucesso.");
        },
        error: (e) => {
          console.log("Erro:", e);
        },
      });
    }
  }
}
