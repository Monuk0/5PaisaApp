import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithOptionComponent } from './login-with-option.component';

describe('LoginWithOptionComponent', () => {
  let component: LoginWithOptionComponent;
  let fixture: ComponentFixture<LoginWithOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
