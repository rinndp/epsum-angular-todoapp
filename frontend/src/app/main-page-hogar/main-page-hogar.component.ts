import { Component } from '@angular/core';
import {Task} from "../services/interfaces/task";
import {ShowAddTaskModalService} from "../services/modales/show-add-task-modal.service";
import {AddRemoveTaskService} from "../services/add-remove-task/add-remove-task.service";

@Component({
  selector: 'app-main-page-hogar',
  templateUrl: './main-page-hogar.component.html',
  styleUrl: './main-page-hogar.component.scss'
})
export class MainPageHogarComponent {
  showTaksToDo: boolean = true;
  showTaksDoing: boolean = true;
  showTaksDone: boolean = true;
  showAddTaskModal: boolean = false;

  currentTasks: Task[] | null = null;
  currentTasksDoing: Task[] = []
  currentTasksDone: Task[] = []

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

  saveShowAddTaskModalValue() {
    this.showAddTaskModalService.showAddTaskModalObservable$.subscribe(show => {
      this.showAddTaskModal = show;
    })
  }

  updateArrayListTask() {
    this.addRemoveTaskService.arrayListTaskHomeObservable$.subscribe(taks  => {
      this.currentTasks = taks;
    })
  }

  removeTask(task: Task) {
    this.addRemoveTaskService.removeTaskHome(task)
  }

  addTaskDoing (task: Task) {
    this.currentTasksDoing.push(task);
    this.removeTask(task);
    console.log(this.currentTasksDoing);
  }

  addTaskDone (task: Task) {
    this.currentTasksDone.push(task);
    this.removeTaskDoing(task);
    console.log(this.currentTasksDone);
  }


  removeTaskDoing (task: Task) {
    this.currentTasksDoing.splice(this.currentTasksDoing.indexOf(task), 1);
  }

  removeTaskDone (task: Task) {
    this.currentTasksDone.splice(this.currentTasksDone.indexOf(task), 1);
  }

  toogleAddTaskModal () {
    this.showAddTaskModalService.updateShowAddTaskModal(true);
  }
}
