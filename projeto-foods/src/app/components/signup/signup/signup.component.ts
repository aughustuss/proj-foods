import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      UserName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
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
          console.log(err?.error?.message);
        }
      });
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm);
    }
  }
}
