import { ResumeCardTestimonies } from './../../../core/util/models/resume-card-testimonies';
import { DataBase } from './../../../core/util/data-base';
import { PageService } from './../../page.service';
import { ResumeTitle } from './../../../core/util/models/resume-title';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-testimonies',
  templateUrl: './resume-testimonies.component.html',
  styleUrls: ['./resume-testimonies.component.css']
})
export class ResumeTestimoniesComponent implements OnInit {
  private _sectionId: string;

  resumeTitle: ResumeTitle[];
  title: string;
  source: string;
  resumeCardTestimonies: ResumeCardTestimonies[];

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
    this.getCardResumeTestimonies();
  }

  getTitleAndLogo(): void {
    this.pageService.getDatas(DataBase.resumeTitle).subscribe(x => {
      this.resumeTitle = x;
      this.resumeTitle.find(el => {
        if (el.componentName === 'testimonies') {
          this.title = el.titleLogo.titleName;
          this.source = el.titleLogo.src;
        }
      });
    });
  }

  getCardResumeTestimonies(): void {
    this.pageService.getDatas(DataBase.resumeCardTestimonies).subscribe(x => {
      this.resumeCardTestimonies = x;
    });
  }
}
