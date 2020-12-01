import { ProgrammingLanguagesLogo } from './../../../core/util/models/programming-languages-logo';
import { DataBase } from 'src/app/core/util/data-base';
import { PageService } from './../../page.service';
import { ResumeTitle } from './../../../core/util/models/resume-title';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-programming-languages',
  templateUrl: './resume-programming-languages.component.html',
  styleUrls: ['./resume-programming-languages.component.css']
})
export class ResumeProgrammingLanguagesComponent implements OnInit {
  private _sectionId: string;

  title: string;
  source: string;
  resumeTitle: ResumeTitle[];
  logos: ProgrammingLanguagesLogo[];

  public get sectionId(): string {
    return this._sectionId;
  }
  @Input()
  public set sectionId(sectionId: string) {
    this._sectionId = sectionId;
  }

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.getTitleAndLogo();
    this.getLogos();
  }

  getTitleAndLogo(): void {
    this.pageService.getDatas(DataBase.resumeTitle).subscribe(x => {
      this.resumeTitle = x;
      this.resumeTitle.forEach(el => {
        if (el.componentName === 'programmingLanguages') {
          this.title = el.titleLogo.titleName;
          this.source = el.titleLogo.src;
        }
      });
    });
  }

  getLogos(): void {
    this.pageService.getDatas(DataBase.programmingLanguagesLogos).subscribe(x => {
      this.logos = x;
    });
  }
}
