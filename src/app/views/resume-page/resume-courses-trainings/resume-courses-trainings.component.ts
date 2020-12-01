import { ResumeCardCoursesTrainings } from './../../../core/util/models/resume-card-courses-trainings';
import { ResumeTitle } from './../../../core/util/models/resume-title';
import { DataBase } from 'src/app/core/util/data-base';
import { PageService } from './../../page.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-courses-trainings',
  templateUrl: './resume-courses-trainings.component.html',
  styleUrls: ['./resume-courses-trainings.component.css']
})
export class ResumeCoursesTrainingsComponent implements OnInit {
  private _sectionId: string;

  title: string;
  source: string;
  resumeTitle: ResumeTitle[];
  cardResumeCoursesTrainings: ResumeCardCoursesTrainings[];

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
    this.getResumeCardCoursesTrainings();
  }

  getTitleAndLogo(): void {
    this.pageService.getDatas(DataBase.resumeTitle).subscribe(x => {
      this.resumeTitle = x;
      this.resumeTitle.forEach(el => {
        if (el.componentName === 'coursesTrainings') {
          this.title = el.titleLogo.titleName;
          this.source = el.titleLogo.src;
        }
      });
    });
  }

  getResumeCardCoursesTrainings(): void {
    this.pageService.getDatas(DataBase.cardResumeCoursesTrainings).subscribe(x => {
      this.cardResumeCoursesTrainings = x;
    });
  }
}
