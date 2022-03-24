import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementIncomePurchaseComponent } from './retirement-income-purchase.component';

describe('RetirementIncomePurchaseComponent', () => {
  let component: RetirementIncomePurchaseComponent;
  let fixture: ComponentFixture<RetirementIncomePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementIncomePurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementIncomePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
