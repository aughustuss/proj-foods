import { FormGroup } from "@angular/forms";

export function ConfirmPasswordValidator(pass: string, matchpass: string) {
    return (fg: FormGroup) => {
        const passControl = fg.controls[pass];
        const matchPassControl = fg.controls[matchpass];
        if (matchPassControl.errors && matchPassControl.errors['confirmPasswordValidator'])
            return;
        if (passControl.value !== matchPassControl.value) {
            matchPassControl.setErrors({
                confirmPasswordValidator: true,
            });
        } else {
            matchPassControl.setErrors(null);
        }
    }
}