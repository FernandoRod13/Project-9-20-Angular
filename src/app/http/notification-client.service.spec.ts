import { TestBed, inject } from '@angular/core/testing';

import { NotificationClientService } from './notification-client.service';

describe('NotificationClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationClientService]
    });
  });

  it('should be created', inject([NotificationClientService], (service: NotificationClientService) => {
    expect(service).toBeTruthy();
  }));
});
