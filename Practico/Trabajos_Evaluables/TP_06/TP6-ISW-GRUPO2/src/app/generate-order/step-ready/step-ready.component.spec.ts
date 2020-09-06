import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepReadyComponent } from './step-ready.component';

describe('StepReadyComponent', () => {
  let component: StepReadyComponent;
  let fixture: ComponentFixture<StepReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
