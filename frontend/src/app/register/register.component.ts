import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  showPassword: boolean = false
  typeText: String = 'password';

  constructor(
      private router: Router,
  ) {
  }

  tooglePassword () {
    this.showPassword = !this.showPassword
    if (this.showPassword) {
      this.typeText = 'text'
    } else {
      this.typeText = 'password'
    }
  }

  launchLogin() {
    this.router.navigate(['..'])
  }
}
