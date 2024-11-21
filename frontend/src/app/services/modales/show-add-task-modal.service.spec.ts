import { TestBed } from '@angular/core/testing';

import { ShowAddTaskModalService } from './show-add-task-modal.service';

describe('AddTaskService', () => {
  let service: ShowAddTaskModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowAddTaskModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
