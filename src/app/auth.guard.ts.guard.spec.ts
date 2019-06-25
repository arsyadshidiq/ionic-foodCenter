import { TestBed, async, inject } from '@angular/core/testing';

import { Auth.Guard.TsGuard } from './auth.guard.ts.guard';

describe('Auth.Guard.TsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.Guard.TsGuard]
    });
  });

  it('should ...', inject([Auth.Guard.TsGuard], (guard: Auth.Guard.TsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
