import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendCalculatorComponent } from './dividend-calculator.component';

describe('DividendCalculatorComponent', () => {
  let component: DividendCalculatorComponent;
  let fixture: ComponentFixture<DividendCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividendCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
