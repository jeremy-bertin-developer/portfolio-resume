import { ResumeCardStudies } from './../../../core/util/models/resume-card-studies';
import { DataBase } from './../../../core/util/data-base';
import { PageService } from './../../page.service';
import { ProgrammingLanguagesLogo } from './../../../core/util/models/programming-languages-logo';
import { ResumeTitle } from './../../../core/util/models/resume-title';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-studies',
  templateUrl: './resume-studies.component.html',
  styleUrls: ['./resume-studies.component.css']
})
export class ResumeStudiesComponent implements OnInit {
  private _sectionId: string;

  title: string;
  source: string;
  resumeTitle: ResumeTitle[];
  resumeCardStudies: ResumeCardStudies[];

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
    this.getResumeCardStudies();
  }

  getTitleAndLogo(): void {
    this.pageService.getDatas(DataBase.resumeTitle).subscribe(x => {
      this.resumeTitle = x;
      this.resumeTitle.forEach(el => {
        if (el.componentName === 'studies') {
          this.title = el.titleLogo.titleName;
          this.source = el.titleLogo.src;
        }
      });
    });
  }

  getResumeCardStudies(): void {
    this.pageService.getDatas(DataBase.resumeCardStudies).subscribe(x => {
      this.resumeCardStudies = x;
    });
  }
}
