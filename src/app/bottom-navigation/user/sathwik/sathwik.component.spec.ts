import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SathwikComponent } from './sathwik.component';

describe('SathwikComponent', () => {
  let component: SathwikComponent;
  let fixture: ComponentFixture<SathwikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SathwikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SathwikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
