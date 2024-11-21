import {Component, OnInit} from '@angular/core';
import {ShowAddTaskModalService} from "../services/modales/show-add-task-modal.service";
import {AddRemoveTaskService} from "../services/add-remove-task/add-remove-task.service";
import {Task} from "../services/interfaces/task";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  showTaksToDo: boolean = false;
  showTaksDoing: boolean = false;
  showTaksDone: boolean = false;
  showTaksDelayed: boolean = false;
  showAddTaskModal: boolean = false;

  currentTasks: Task[] | null = null;

  constructor(
      private showAddTaskModalService: ShowAddTaskModalService,
      private addRemoveTaskService: AddRemoveTaskService,
  ) {
  }

  ngOnInit() {
      this.saveShowAddTaskModalValue()
      this.updateArrayListTask()
  }

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

  saveShowAddTaskModalValue() {
    this.showAddTaskModalService.showAddTaskModalObservable$.subscribe(show => {
      this.showAddTaskModal = show;
    })
  }

  updateArrayListTask() {
    this.addRemoveTaskService.arrayListTaskObservable$.subscribe(taks  => {
      this.currentTasks = taks;
    })
  }

  removeTask(task: Task) {
    this.addRemoveTaskService.removeTask(task)
  }

  toogleAddTaskModal () {
    this.showAddTaskModalService.updateShowAddTaskModal(true);
  }
}
