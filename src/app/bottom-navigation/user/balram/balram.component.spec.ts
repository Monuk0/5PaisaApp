import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalramComponent } from './balram.component';

describe('BalramComponent', () => {
  let component: BalramComponent;
  let fixture: ComponentFixture<BalramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
