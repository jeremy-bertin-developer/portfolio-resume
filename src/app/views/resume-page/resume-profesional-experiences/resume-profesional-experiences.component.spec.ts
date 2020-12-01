import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeProfesionalExperiencesComponent } from './resume-profesional-experiences.component';

describe('ResumeProfesionalExperiencesComponent', () => {
  let component: ResumeProfesionalExperiencesComponent;
  let fixture: ComponentFixture<ResumeProfesionalExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeProfesionalExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeProfesionalExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
