import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTestimoniesComponent } from './resume-testimonies.component';

describe('ResumeTestimoniesComponent', () => {
  let component: ResumeTestimoniesComponent;
  let fixture: ComponentFixture<ResumeTestimoniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeTestimoniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
