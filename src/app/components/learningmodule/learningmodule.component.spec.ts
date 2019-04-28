import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningmoduleComponent } from './learningmodule.component';

describe('LearningmoduleComponent', () => {
  let component: LearningmoduleComponent;
  let fixture: ComponentFixture<LearningmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
