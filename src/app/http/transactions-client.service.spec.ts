import { TestBed, inject } from '@angular/core/testing';

import { TransactionsClientService } from './transactions-client.service';

describe('TransactionsClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionsClientService]
    });
  });

  it('should be created', inject([TransactionsClientService], (service: TransactionsClientService) => {
    expect(service).toBeTruthy();
  }));
});
