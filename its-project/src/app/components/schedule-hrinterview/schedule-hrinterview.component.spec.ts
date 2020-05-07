import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleHrinterviewComponent } from './schedule-hrinterview.component';

describe('ScheduleHrinterviewComponent', () => {
  let component: ScheduleHrinterviewComponent;
  let fixture: ComponentFixture<ScheduleHrinterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleHrinterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleHrinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
