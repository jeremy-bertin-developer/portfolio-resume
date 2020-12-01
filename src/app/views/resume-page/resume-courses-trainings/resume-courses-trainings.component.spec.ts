import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCoursesTrainingsComponent } from './resume-courses-trainings.component';

describe('ResumeCoursesTrainingsComponent', () => {
  let component: ResumeCoursesTrainingsComponent;
  let fixture: ComponentFixture<ResumeCoursesTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCoursesTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCoursesTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
