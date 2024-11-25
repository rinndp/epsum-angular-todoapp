import {Component, OnInit} from '@angular/core';
import {TareaExamen} from "../services/interfaces/tarea-examen";
import {Router} from "@angular/router";
import {EnviarTareaDetallesService} from "../services/enviar-tarea-detalles/enviar-tarea-detalles.service";

@Component({
  selector: 'app-detalles-tarea-examen',
  templateUrl: './detalles-tarea-examen.component.html',
  styleUrl: './detalles-tarea-examen.component.scss'
})
export class DetallesTareaExamenComponent implements OnInit {
  tareaExamen: TareaExamen | null = {
    id: 0,
    nombre: "",
    descripcion: "",
    estado: "",
  }

  constructor(
      private router: Router,
      private enviarTareaDetallesService: EnviarTareaDetallesService,
  ) {
  }

  ngOnInit() {
    this.getTareaExamen()
  }

  getTareaExamen() {
    this.enviarTareaDetallesService.tareaExamenObservable$.subscribe(tarea => {
      this.tareaExamen = tarea;
    })
  }

  launchListaTareaExamen() {
    this.enviarTareaDetallesService.actualizarTarea(null)
    this.router.navigate(['..']);
    this.router.navigate(['lista-tareas-examen']);
  }
}
