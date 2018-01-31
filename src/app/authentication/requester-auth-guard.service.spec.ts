import { TestBed, inject } from '@angular/core/testing';

import { RequesterAuthGuardService } from './requester-auth-guard.service';

describe('RequesterAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequesterAuthGuardService]
    });
  });

  it('should be created', inject([RequesterAuthGuardService], (service: RequesterAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
