import { Component } from '@angular/core';
import {TareaExamen} from "../services/interfaces/tarea-examen";
import {Router} from "@angular/router";
import {EnviarTareaDetallesService} from "../services/enviar-tarea-detalles/enviar-tarea-detalles.service";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {filter} from "rxjs";

@Component({
  selector: 'app-lista-tareas-examen',
  templateUrl: './lista-tareas-examen.component.html',
  styleUrl: './lista-tareas-examen.component.scss'
})
export class ListaTareasExamenComponent {

  filtrado: FormGroup;

  constructor(
      private router: Router,
      private enviarTareaDetallesService: EnviarTareaDetallesService,
      private formBuilder: FormBuilder,

  ) {
    this.filtrado = this.formBuilder.group({
      estado: ["", Validators.required]
    })
  }

  arrayTareasExamen: TareaExamen [] = [
    {id: 1, nombre:"Deberes", descripcion: "Hacer los deberes de Desarrollo de interfaces", estado: "finalizada"},
    {id: 2, nombre:"Limpiar", descripcion: "Limpiar mi habitación", estado: "pendiente"},
    {id: 3, nombre:"Comprar", descripcion: "Ir al Mercadona a comprar patatas", estado: "finalizada"},
    {id: 4, nombre:"Ejercicio", descripcion: "Ir al gym a hacer pecho", estado: "pendiente"},
    {id: 5, nombre:"Regalo", descripcion: "Comprar regalo de cumpleaños de mamá", estado: "finalizada"}
  ]

  arrayMostrar: TareaExamen [] = []

  launchDetalles (tarea: TareaExamen) {
    this.enviarTareaDetallesService.actualizarTarea(tarea);
    this.router.navigate(['detalles-tarea-examen']);
  }

  launchMainPage () {
    this.router.navigate(['..']);
    this.router.navigate(['work']);
  }

  filtrarLista () {
    if (this.filtrado.value.estado == "todas") {
      this.arrayMostrar = this.arrayTareasExamen
    } else if (this.filtrado.value.estado == "finalizadas") {
      this.arrayMostrar = this.arrayTareasExamen.filter(tarea => tarea.estado == "finalizada");
    } else if (this.filtrado.value.estado == "pendientes") {
      this.arrayMostrar = this.arrayTareasExamen.filter(tarea => tarea.estado == "pendiente");
    }
  }
}
