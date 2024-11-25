import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-boton-examen',
  templateUrl: './boton-examen.component.html',
  styleUrl: './boton-examen.component.scss'
})
export class BotonExamenComponent {

  constructor(
      private router: Router,
  ) {}

  launchListaTareasExamen() {
    this.router.navigate(['lista-tareas-examen']);
  }

}
