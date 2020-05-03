import { TestBed } from '@angular/core/testing';

import { GetFreeTechPanelService } from './get-free-tech-panel.service';

describe('GetFreeTechPanelService', () => {
  let service: GetFreeTechPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFreeTechPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
