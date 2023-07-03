import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth/auth.service';
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [MatButtonModule, RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = '';
  signUpErrorMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      FirstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      LastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(60)])],
      UserName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      Email: ['', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      Password: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/)])],
    });
  };

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = '') : (this.eyeIcon = '');
    this.isText ? this.type = 'type' : this.type = 'password'
  };

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      let signUpObj = {
        ...this.signUpForm.value,
        role: '',
        token: '',
      };
      this.auth.signUp(signUpObj).subscribe({
        next: (res => {
          console.log(res);
          this.signUpForm.reset();
          this.router.navigate(['']);
        }),
        error: (err) => {
          this.signUpErrorMessage = 'Email ou nome de usuário já está em uso.'
          console.log(err?.error?.message);
        }
      });
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm);
    }
  }
}
