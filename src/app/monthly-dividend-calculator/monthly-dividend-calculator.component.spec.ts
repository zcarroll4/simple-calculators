import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDividendCalculatorComponent } from './monthly-dividend-calculator.component';

describe('MonthlyDividendCalculatorComponent', () => {
  let component: MonthlyDividendCalculatorComponent;
  let fixture: ComponentFixture<MonthlyDividendCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyDividendCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDividendCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
