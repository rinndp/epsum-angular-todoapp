import {Component, OnInit} from '@angular/core';
import {AddTaskService} from "../services/modales/add-task.service";

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

  constructor(
      private addTaskService: AddTaskService,
  ) {
  }

  ngOnInit() {
      this.saveShowAddTaskModalValue()
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
    this.addTaskService.showAddTaskModalObservable$.subscribe(show => {
      this.showAddTaskModal = show;
    })
  }

  toogleAddTaskModal () {
    this.addTaskService.updateShowAddTaskModal(true);
  }
}
