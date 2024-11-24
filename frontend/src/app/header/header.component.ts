import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showNav: boolean = false

  constructor(
      private router: Router
  ) {}

  toogleNav () {
    this.showNav = !this.showNav
  }

  launchFamilia () {
    this.router.navigate(['family'])
    this.toogleNav()
  }

  launchWork () {
    this.router.navigate(['work'])
    this.toogleNav()
  }

  launchHome () {
    this.router.navigate(['home'])
    this.toogleNav()
  }

  launchLogin () {
    this.router.navigate(['..'])
    this.toogleNav()
  }
}
