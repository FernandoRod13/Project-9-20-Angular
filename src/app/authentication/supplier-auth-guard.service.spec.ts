import { TestBed, inject } from '@angular/core/testing';

import { SupplierAuthGuardService } from './supplier-auth-guard.service';

describe('SupplierAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierAuthGuardService]
    });
  });

  it('should be created', inject([SupplierAuthGuardService], (service: SupplierAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
