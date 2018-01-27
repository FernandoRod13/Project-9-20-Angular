import { TestBed, inject } from '@angular/core/testing';

import { StatisticsClientService } from './statistics-client.service';

describe('StatisticsClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatisticsClientService]
    });
  });

  it('should be created', inject([StatisticsClientService], (service: StatisticsClientService) => {
    expect(service).toBeTruthy();
  }));
});
