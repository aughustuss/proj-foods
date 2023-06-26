import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/helpers/confirmpasswordvalidator';
import ValidateForm from 'src/app/helpers/validateform';
import { ResetPasswordModel } from 'src/app/models/ResetPasswordModel';
import { ResetpasswordService } from 'src/app/services/resetpassword/resetpassword.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  standalone: true,
  imports: [MatSnackBarModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class ResetComponent {
  resetPasswordForm!: FormGroup;
  emailToReset!: string;
  emailToken!: string;
  resetPasswordObj = new ResetPasswordModel();
  duration: number = 5;

  constructor(
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private resetService: ResetpasswordService,
    private router: Router,
    private snack: MatSnackBar,
    ) { }

  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      Password: [null, Validators.required],
      ConfirmPassword: [null, Validators.required]
    }, {
      validator: ConfirmPasswordValidator("Password", "ConfirmPassword"),
    });
    this.activatedRoute.queryParams.subscribe(val => {
      this.emailToReset = val['email'];
      let uriToken = val['code'];
      this.emailToken = uriToken.replace(/ /g,'+');
    })
  };

  reset(){
    if(this.resetPasswordForm.valid){
      this.resetPasswordObj.email = this.emailToReset;
      this.resetPasswordObj.newPassword = this.resetPasswordForm.value.Password;
      this.resetPasswordObj.confirmPassword = this.resetPasswordForm.value.ConfirmPassword;
      this.resetPasswordObj.emailToken = this.emailToken;
      this.resetService.resetPassword(this.resetPasswordObj).subscribe({
        next: (res) => {
          this.snack.open("Senha redefinida com sucesso.", "OK", {
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            duration: this.duration * 1000,
          })
          this.router.navigate(['login']);
        }, error: (e) => {
          console.log(e)
        }
      })
    } else {
      ValidateForm.validateAllFormFields(this.resetPasswordForm);
    }
  }
}
