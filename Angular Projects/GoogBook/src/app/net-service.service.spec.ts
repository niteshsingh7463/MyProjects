import { TestBed } from '@angular/core/testing';

import { NetServiceService } from './net-service.service';

describe('NetServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetServiceService = TestBed.get(NetServiceService);
    expect(service).toBeTruthy();
  });
});
