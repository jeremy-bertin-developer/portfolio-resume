import { Constants } from 'src/app/core/util/constants';
import { CardResumeProfesionalExperiences } from './../../../core/util/models/card-resume-profesional-experiences';
import { ResumeTitle } from './../../../core/util/models/resume-title';
import { DataBase } from 'src/app/core/util/data-base';
import { PageService } from './../../page.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-profesional-experiences',
  templateUrl: './resume-profesional-experiences.component.html',
  styleUrls: ['./resume-profesional-experiences.component.css']
})
export class ResumeProfesionalExperiencesComponent implements OnInit {
  private _sectionId: string;

  title: string;
  source: string;
  resumeTitle: ResumeTitle[];
  cardResumeProfXpColLeft: CardResumeProfesionalExperiences[];
  cardResumeProfXpColRight: CardResumeProfesionalExperiences[];

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
    this.getCardResumeProfXpColLeft();
    this.getCardResumeProfXpColRight();
  }

  getTitleAndLogo(): void {
    this.pageService.getDatas(DataBase.resumeTitle).subscribe(x => {
      this.resumeTitle = x;
      this.resumeTitle.forEach(el => {
        if (el.componentName === 'profesionalXp') {
          this.title = el.titleLogo.titleName;
          this.source = el.titleLogo.src;
        }
      });
    });
  }

  getCardResumeProfXpColLeft(): void {
    this.pageService.getDatas(DataBase.cardResumeProfesionalExperiencesColLeft).subscribe(x => {
      this.cardResumeProfXpColLeft = x;
    });
  }

  getCardResumeProfXpColRight(): void {
    this.pageService.getDatas(DataBase.cardResumeProfesionalExperiencesColRight).subscribe(x => {
      this.cardResumeProfXpColRight = x;
    });
  }
}
