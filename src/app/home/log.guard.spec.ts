import {TestBed, async, inject} from '@angular/core/testing';

import {LogGuard} from './log.guard';

describe('LogGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogGuard]
    });
  });

  it('should ...', inject([LogGuard], (guard: LogGuard) => {
    expect(guard).toBeTruthy();
  }));
});
