import { TestBed, inject } from '@angular/core/testing';

import { ResourcesClientService } from './resource-client.service';

describe('ProjectsClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourcesClientService]
    });
  });

  it('should be created', inject([ResourcesClientService], (service: ResourcesClientService) => {
    expect(service).toBeTruthy();
  }));
});
