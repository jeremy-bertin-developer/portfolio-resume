import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSeparationComponent } from './line-separation.component';

describe('LineSeparationComponent', () => {
  let component: LineSeparationComponent;
  let fixture: ComponentFixture<LineSeparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineSeparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSeparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
