import { PageService } from './../../page.service';
import { DataBase } from 'src/app/core/util/data-base';
import { ResumeTitle } from './../../../core/util/models/resume-title';
import { Component, OnInit, Input } from '@angular/core';
import { ResumeCardLanguages } from './../../../core/util/models/resume-card-languages';

@Component({
  selector: 'app-resume-languages',
  templateUrl: './resume-languages.component.html',
  styleUrls: ['./resume-languages.component.css']
})
export class ResumeLanguagesComponent implements OnInit {
  private _sectionId: string;

  resumeTitle: ResumeTitle[];
  title: string;
  source: string;

  cardLanguages: ResumeCardLanguages[];

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
    this.getResumeCardLanguages();
  }

  getTitleAndLogo(): void {
    this.pageService.getDatas(DataBase.resumeTitle).subscribe(x => {
      this.resumeTitle = x;
      this.resumeTitle.find(el => {
        if (el.componentName === 'languages') {
          this.title = el.titleLogo.titleName;
          this.source = el.titleLogo.src;
        }
      });
    });
  }

  getResumeCardLanguages(): void {
    this.pageService.getDatas(DataBase.resumeCardLanguages).subscribe(x => {
      this.cardLanguages = x;
    });
  }
}
