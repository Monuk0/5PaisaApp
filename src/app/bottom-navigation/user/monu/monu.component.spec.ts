import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonuComponent } from './monu.component';

describe('MonuComponent', () => {
  let component: MonuComponent;
  let fixture: ComponentFixture<MonuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
