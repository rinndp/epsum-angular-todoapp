import { TestBed } from '@angular/core/testing';

import { AddRemoveTaskService } from './add-remove-task.service';

describe('AddRemoveTaskService', () => {
  let service: AddRemoveTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRemoveTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
