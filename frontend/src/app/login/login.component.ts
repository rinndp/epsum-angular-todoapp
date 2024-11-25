import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword: boolean = false
  formulario: FormGroup;
  typeText: String = 'password';

  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
  ) {
    this.formulario = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    })
  }

  tooglePassword () {
    this.showPassword = !this.showPassword

    if (this.showPassword)
      this.typeText = 'text'
    else
      this.typeText = 'password'
  }

  launchRegister () {
    this.router.navigate([`register`])
  }

  launchMainPage () {
    this.router.navigate([`work`])
    alert("Se ha iniciado sesión");
  }
}
