import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleHrinterviewFormComponent } from './schedule-hrinterview-form.component';

describe('ScheduleHrinterviewFormComponent', () => {
  let component: ScheduleHrinterviewFormComponent;
  let fixture: ComponentFixture<ScheduleHrinterviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleHrinterviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleHrinterviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
