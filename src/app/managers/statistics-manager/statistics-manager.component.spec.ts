import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsManagerComponent } from './statistics-manager.component';

describe('StatisticsManagerComponent', () => {
  let component: StatisticsManagerComponent;
  let fixture: ComponentFixture<StatisticsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
