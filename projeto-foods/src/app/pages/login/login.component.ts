import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoreService } from 'src/app/services/store/store.service';
import ValidateForm from 'src/app/helpers/validateform';
import { ResetpasswordService } from 'src/app/services/resetpassword/resetpassword.service';
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule, MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatButtonModule, RouterModule, CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSnackBarModule]
})

export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  isOpen: boolean = false;
  loginErrorMessage: string = '';
  snackDuration: number = 5;
  public resetPasswordEmail: string = '';
  public isValidEmail: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router,
    private userStore: StoreService,
    private resetPassword: ResetpasswordService,
    private snackBar: MatSnackBar,
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
          this.auth.storeToken(res.accessToken);
          this.loginForm.reset();
          this.auth.storeRefreshToken(res.refreshToken);
          const userPayload = this.auth.decodifyToken();
          this.userStore.setFullNameForStore(userPayload.unique_name);
          this.userStore.setRoleForStore(userPayload.role);
          this.snackBar.open("Login realizado com sucesso.", "Ok", {
            duration: this.snackDuration * 1000,
          })
          this.route.navigate(['']);
        },
        error: (err) => {
          this.loginErrorMessage = 'Email ou senha inválidos.';
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
          this.snackBar.open("Email enviado com sucesso.", "Ok", {
            duration: this.snackDuration * 1000,
          });
        },
        error: (e) => {
          console.log("Erro:", e);
        },
      });
    }
  }
}