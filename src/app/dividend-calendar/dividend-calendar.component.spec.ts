import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendCalendarComponent } from './dividend-calendar.component';

describe('DividendCalendarComponent', () => {
  let component: DividendCalendarComponent;
  let fixture: ComponentFixture<DividendCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividendCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
