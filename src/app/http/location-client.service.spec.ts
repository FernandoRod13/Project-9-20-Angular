import { TestBed, inject } from '@angular/core/testing';

import { LocationClientService } from './location-client.service';

describe('LocationClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationClientService]
    });
  });

  it('should be created', inject([LocationClientService], (service: LocationClientService) => {
    expect(service).toBeTruthy();
  }));
});
