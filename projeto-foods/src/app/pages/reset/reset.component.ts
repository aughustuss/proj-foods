import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';
import { ResetPasswordModel } from 'src/app/models/ResetPasswordModel';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      Password: [null, Validators.required],
      ConfirmPassword: [null, Validators.required]
    });
  };

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      alert("Tudo certo");
    } else {
      ValidateForm.validateAllFormFields(this.resetPasswordForm);
    }
  }
}
