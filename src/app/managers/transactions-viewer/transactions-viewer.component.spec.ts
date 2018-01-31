import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsViewerComponent } from './transactions-viewer.component';

describe('TransactionsViewerComponent', () => {
  let component: TransactionsViewerComponent;
  let fixture: ComponentFixture<TransactionsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
