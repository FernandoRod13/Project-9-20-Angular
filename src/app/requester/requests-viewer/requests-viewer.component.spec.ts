import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsViewerComponent } from './requests-viewer.component';

describe('RequestsViewerComponent', () => {
  let component: RequestsViewerComponent;
  let fixture: ComponentFixture<RequestsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
