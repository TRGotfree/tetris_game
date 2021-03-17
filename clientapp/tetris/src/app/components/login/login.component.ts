import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  loginField: FormControl;
  passwordField: FormControl;

  constructor(private readonly router: Router) {
    this.loginFormGroup = new FormGroup({
      "loginField": new FormControl("", Validators.required),
      "passwordField": new FormControl("", Validators.required)
    });
  }

  ngOnInit() { }

  signup() {
    this.router.navigate['signup'];
  }

  login(event: KeyboardEvent | MouseEvent) {
    if (event)
      event.preventDefault();

    if (this.loginFormGroup.invalid)
      return;


  }

}
