import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioIncomeCalculatorComponent } from './portfolio-income-calculator.component';

describe('PortfolioIncomeCalculatorComponent', () => {
  let component: PortfolioIncomeCalculatorComponent;
  let fixture: ComponentFixture<PortfolioIncomeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioIncomeCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioIncomeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
