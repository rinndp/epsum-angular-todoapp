import { Component } from '@angular/core';
import {AddTaskService} from "../services/modales/add-task.service";

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.scss'
})
export class AddTaskModalComponent {
  constructor(
      private addTaskService: AddTaskService,
  ) {}

  closeAddTaskModal(): void {
    this.addTaskService.updateShowAddTaskModal(false);
  }
}
