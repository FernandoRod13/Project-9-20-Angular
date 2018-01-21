import { TestBed, inject } from '@angular/core/testing';

import { ProjectsClientService } from './projects-client.service';

describe('ProjectsClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsClientService]
    });
  });

  it('should be created', inject([ProjectsClientService], (service: ProjectsClientService) => {
    expect(service).toBeTruthy();
  }));
});
