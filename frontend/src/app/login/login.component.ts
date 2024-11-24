import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword: boolean = false
  typeText: String = 'password';

  constructor(
      private router: Router,
  ) {
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
  }
}
