import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowAddTaskModalService {

  showAddTaskModal: BehaviorSubject<boolean> = new BehaviorSubject(false);
  showAddTaskModalObservable$:Observable<boolean> = this.showAddTaskModal.asObservable();

  constructor() { }

  updateShowAddTaskModal(show: boolean) {
    this.showAddTaskModal.next(show);
  }
}
