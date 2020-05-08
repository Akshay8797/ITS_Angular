import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPanelHomePageComponent } from './hr-panel-home-page.component';

describe('HrPanelHomePageComponent', () => {
  let component: HrPanelHomePageComponent;
  let fixture: ComponentFixture<HrPanelHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPanelHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPanelHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
