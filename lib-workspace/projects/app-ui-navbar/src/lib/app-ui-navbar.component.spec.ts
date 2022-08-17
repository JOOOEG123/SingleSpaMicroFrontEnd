import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUiNavbarComponent } from './app-ui-navbar.component';

describe('AppUiNavbarComponent', () => {
  let component: AppUiNavbarComponent;
  let fixture: ComponentFixture<AppUiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUiNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
