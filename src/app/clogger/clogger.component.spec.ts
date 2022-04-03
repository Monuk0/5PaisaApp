import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloggerComponent } from './clogger.component';

describe('CloggerComponent', () => {
  let component: CloggerComponent;
  let fixture: ComponentFixture<CloggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
