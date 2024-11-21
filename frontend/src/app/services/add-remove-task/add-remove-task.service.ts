import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Task} from "../interfaces/task";

@Injectable({
  providedIn: 'root'
})
export class AddRemoveTaskService {

  arrayListTask: BehaviorSubject<Task []| null> = new BehaviorSubject<Task []| null>(null)
  arrayListTaskObservable$: Observable<Task [] | null> = this.arrayListTask.asObservable()

  constructor() { }

  addTask (task: Task | null){
    if (task) {
      const currentArrayTask = this.arrayListTask.value || []
      currentArrayTask.push(task)
      this.arrayListTask.next(currentArrayTask)
    }
  }

  removeTask (task: Task | null){
    if (task) {
      const currentArrayTask = this.arrayListTask.value || []
      currentArrayTask.splice(currentArrayTask.indexOf(task), 1)
      this.arrayListTask.next(currentArrayTask)
    }
  }
}
