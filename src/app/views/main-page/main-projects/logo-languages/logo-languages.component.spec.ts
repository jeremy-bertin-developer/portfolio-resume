import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLanguagesComponent } from './logo-languages.component';

describe('LogoLanguagesComponent', () => {
  let component: LogoLanguagesComponent;
  let fixture: ComponentFixture<LogoLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
