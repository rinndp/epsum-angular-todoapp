import { Component } from '@angular/core';
import {ShowAddTaskModalService} from "../services/modales/show-add-task-modal.service";
import {Router} from "@angular/router";
import {AddRemoveTaskService} from "../services/add-remove-task/add-remove-task.service";
import {Task} from "../services/interfaces/task";

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.scss'
})
export class AddTaskModalComponent {

  task = {
    nombre: "",
    fecha: new Date(0, 0, 0),
    categoria: "",
  }

  constructor(
      private showAddTaskModalService: ShowAddTaskModalService,
      private addRemoveTaskService: AddRemoveTaskService,
  ) {}

  onSubmit () {
    this.addRemoveTaskService.addTask(this.task)
    console.log("Tarea creada",this.task);
  }

  closeAddTaskModal(): void {
    this.showAddTaskModalService.updateShowAddTaskModal(false);
  }
}
