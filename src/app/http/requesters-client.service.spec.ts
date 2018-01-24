import { TestBed, inject } from '@angular/core/testing';

import { RequestersClientService } from './requesters-client.service';

describe('RequestersClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestersClientService]
    });
  });

  it('should be created', inject([RequestersClientService], (service: RequestersClientService) => {
    expect(service).toBeTruthy();
  }));
});
