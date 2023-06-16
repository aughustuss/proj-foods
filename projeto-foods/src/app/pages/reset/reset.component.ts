import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/helpers/confirmpasswordvalidator';
import ValidateForm from 'src/app/helpers/validateform';
import { ResetPasswordModel } from 'src/app/models/ResetPasswordModel';
import { ResetpasswordService } from 'src/app/services/resetpassword/resetpassword.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  resetPasswordForm!: FormGroup;
  emailToReset!: string;
  emailToken!: string;
  resetPasswordObj = new ResetPasswordModel();

  constructor(
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private resetService: ResetpasswordService,
    private router: Router
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
      console.log(this.emailToReset, this.emailToken);
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
          console.log(res);
          alert('Redefinição de senha enviada com sucesso.');
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
