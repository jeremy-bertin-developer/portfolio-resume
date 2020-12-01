import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTitleComponent } from './resume-title.component';

describe('ResumeTitleComponent', () => {
  let component: ResumeTitleComponent;
  let fixture: ComponentFixture<ResumeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
