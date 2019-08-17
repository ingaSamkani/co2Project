import { TestBed } from '@angular/core/testing';

import { BackendGateService } from './backend-gate.service';

describe('BackendGateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendGateService = TestBed.get(BackendGateService);
    expect(service).toBeTruthy();
  });
});
