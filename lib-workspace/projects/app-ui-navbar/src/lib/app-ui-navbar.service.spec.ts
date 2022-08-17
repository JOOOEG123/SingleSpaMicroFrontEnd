import { TestBed } from '@angular/core/testing';

import { AppUiNavbarService } from './app-ui-navbar.service';

describe('AppUiNavbarService', () => {
  let service: AppUiNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUiNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
