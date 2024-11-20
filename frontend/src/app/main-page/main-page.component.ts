import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  showTaksToDo: boolean = false;
  showTaksDoing: boolean = false;
  showTaksDone: boolean = false;
  showTaksDelayed: boolean = false;

  toogleTaksToDo () {
    this.showTaksToDo =! this.showTaksToDo;
  }

  toogleTaksDoing () {
    this.showTaksDoing =! this.showTaksDoing;
  }

  toogleTaksDone () {
    this.showTaksDone =! this.showTaksDone;
  }

  toogleTaksDelayed () {
    this.showTaksDelayed =! this.showTaksDelayed;
  }
}
