import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPanelHomePageComponent } from './tech-panel-home-page.component';

describe('TechPanelHomePageComponent', () => {
  let component: TechPanelHomePageComponent;
  let fixture: ComponentFixture<TechPanelHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechPanelHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechPanelHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
