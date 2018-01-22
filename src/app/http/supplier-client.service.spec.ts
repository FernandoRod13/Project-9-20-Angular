import { TestBed, inject } from '@angular/core/testing';

import { SupplierClientService } from './supplier-client.service';

describe('SupplierClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierClientService]
    });
  });

  it('should be created', inject([SupplierClientService], (service: SupplierClientService) => {
    expect(service).toBeTruthy();
  }));
});
