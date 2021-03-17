import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpFormGroup: FormGroup;
  loginField: FormControl = new FormControl('', Validators.required);
  passwordField: FormControl = new FormControl('', Validators.required);
  passwordRepeatField: FormControl = new FormControl('', [Validators.required, this.checkPassRepeat]);
  nickNameField: FormControl = new FormControl('', Validators.required);

  constructor() {
    this.signUpFormGroup = new FormGroup({
      "loginField": this.loginField,
      "passwordField": this.passwordField,
      "passwordRepeatField": this.passwordRepeatField,
      "nickNameField": this.nickNameField
    });
  }

  ngOnInit() {
  }

  signup(event: MouseEvent | KeyboardEvent) {
    if (event)
      event.preventDefault();

  }

  private checkPassRepeat(passRepeatControl: AbstractControl) {

    if (!passRepeatControl == null || !this || !this.signUpFormGroup)
      return null;

    if ((passRepeatControl.value == null || passRepeatControl.value.length == 0) && (this.signUpFormGroup.get('passwordField').value == null || this.signUpFormGroup.get('passwordField').value.length == 0))
      return null;

    if (passRepeatControl.value != this.signUpFormGroup.get('passwordField').value)
      return { 'passwordRepeatFieldInvalid': true };

    return null;

  }

}
