import { TestBed } from '@angular/core/testing';

import { TaskReplacementService } from './task-replacement.service';

describe('TaskReplacementService', () => {
  let service: TaskReplacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskReplacementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
