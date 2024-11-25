import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {TareaExamen} from "../interfaces/tarea-examen";

@Injectable({
  providedIn: 'root'
})
export class EnviarTareaDetallesService {

  tareaExamen: BehaviorSubject<TareaExamen | null> = new BehaviorSubject<TareaExamen | null>(null);
  tareaExamenObservable$: Observable<TareaExamen | null> = this.tareaExamen.asObservable();

  constructor() { }

  actualizarTarea(tarea: TareaExamen | null) {
    this.tareaExamen.next(tarea);
  }
}
