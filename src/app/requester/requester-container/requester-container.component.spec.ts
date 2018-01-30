import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterContainerComponent } from './requester-container.component';

describe('RequesterContainerComponent', () => {
  let component: RequesterContainerComponent;
  let fixture: ComponentFixture<RequesterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
