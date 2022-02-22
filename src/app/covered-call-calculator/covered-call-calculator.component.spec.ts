import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveredCallCalculatorComponent } from './covered-call-calculator.component';

describe('CoveredCallCalculatorComponent', () => {
  let component: CoveredCallCalculatorComponent;
  let fixture: ComponentFixture<CoveredCallCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoveredCallCalculatorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveredCallCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
