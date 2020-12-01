import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeProgrammingLanguagesComponent } from './resume-programming-languages.component';

describe('ResumeProgrammingLanguagesComponent', () => {
  let component: ResumeProgrammingLanguagesComponent;
  let fixture: ComponentFixture<ResumeProgrammingLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeProgrammingLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeProgrammingLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
