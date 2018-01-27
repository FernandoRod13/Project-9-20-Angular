import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestersManagerComponent } from './requesters-manager.component';

describe('RequestersManagerComponent', () => {
  let component: RequestersManagerComponent;
  let fixture: ComponentFixture<RequestersManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestersManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
