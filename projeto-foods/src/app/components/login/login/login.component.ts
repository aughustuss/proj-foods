import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { NgToastService } from 'ng-angular-popup'
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoreService } from 'src/app/services/store/store.service';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router,
    private toast: NgToastService,
    private userStore: StoreService,
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

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.logIn(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.loginForm.reset();
          this.auth.storeToken(res.accesstoken);
          this.auth.storeRefreshToken(res.refreshToken);
          // const userPayload = this.auth.decodifyToken();
          // this.userStore.setFullNameForStore(userPayload.fullName);
          // this.userStore.setRoleForStore(userPayload.role);
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
}

