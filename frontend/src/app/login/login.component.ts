import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword: boolean = false

  tooglePassword () {
    this.showPassword = !this.showPassword
  }
}
