import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeStudiesComponent } from './resume-studies.component';

describe('ResumeStudiesComponent', () => {
  let component: ResumeStudiesComponent;
  let fixture: ComponentFixture<ResumeStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
