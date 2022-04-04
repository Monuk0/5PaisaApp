import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaibhavComponent } from './vaibhav.component';

describe('VaibhavComponent', () => {
  let component: VaibhavComponent;
  let fixture: ComponentFixture<VaibhavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaibhavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaibhavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
