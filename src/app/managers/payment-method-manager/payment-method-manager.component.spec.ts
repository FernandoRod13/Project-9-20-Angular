import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodManagerComponent } from './payment-method-manager.component';

describe('PaymentMethodManagerComponent', () => {
  let component: PaymentMethodManagerComponent;
  let fixture: ComponentFixture<PaymentMethodManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMethodManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
