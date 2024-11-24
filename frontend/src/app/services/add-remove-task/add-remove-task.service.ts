import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Task} from "../interfaces/task";

@Injectable({
  providedIn: 'root'
})
export class AddRemoveTaskService {

  arrayListTaskWork: BehaviorSubject<Task []| null> = new BehaviorSubject<Task []| null>(null)
  arrayListTaskWorkObservable$: Observable<Task [] | null> = this.arrayListTaskWork.asObservable()

  arrayListTaskFamily: BehaviorSubject<Task []| null> = new BehaviorSubject<Task []| null>(null)
  arrayListTaskFamilyObservable$: Observable<Task [] | null> = this.arrayListTaskFamily.asObservable()

  arrayListTaskHome: BehaviorSubject<Task []| null> = new BehaviorSubject<Task []| null>(null)
  arrayListTaskHomeObservable$: Observable<Task [] | null> = this.arrayListTaskHome.asObservable()

  constructor() { }

  addTaskWork (task: Task | null){
    if (task) {
      const currentArrayTask = this.arrayListTaskWork.value || []
      currentArrayTask.push(task)
      this.arrayListTaskWork.next(currentArrayTask)
    }
  }

  removeTaskWork (task: Task | null){
    if (task) {
      const currentArrayTask = this.arrayListTaskWork.value || []
      currentArrayTask.splice(currentArrayTask.indexOf(task), 1)
      this.arrayListTaskWork.next(currentArrayTask)
    }
  }

  addTaskFamily (task: Task | null){
    if (task) {
      const currentArrayTask = this.arrayListTaskFamily.value || []
      currentArrayTask.push(task)
      this.arrayListTaskFamily.next(currentArrayTask)
    }
  }

  removeTaskFamily (task: Task | null){
    if (task) {
      const currentArrayTask = this.arrayListTaskFamily.value || []
      currentArrayTask.splice(currentArrayTask.indexOf(task), 1)
      this.arrayListTaskFamily.next(currentArrayTask)
    }
  }

  addTaskHome (task: Task | null){
    if (task) {
      const currentArrayTask = this.arrayListTaskHome.value || []
      currentArrayTask.push(task)
      this.arrayListTaskHome.next(currentArrayTask)
    }
  }

  removeTaskHome (task: Task | null){
    if (task) {
      const currentArrayTask = this.arrayListTaskHome.value || []
      currentArrayTask.splice(currentArrayTask.indexOf(task), 1)
      this.arrayListTaskHome.next(currentArrayTask)
    }
  }
}
