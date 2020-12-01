import { HobbiesLogo } from './../../../core/util/models/hobbies-logo';
import { DataBase } from 'src/app/core/util/data-base';
import { PageService } from './../../page.service';
import { ResumeTitle } from './../../../core/util/models/resume-title';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-hobbies',
  templateUrl: './resume-hobbies.component.html',
  styleUrls: ['./resume-hobbies.component.css']
})
export class ResumeHobbiesComponent implements OnInit {
  private _sectionId: string;

  resumeTitle: ResumeTitle[];
  title: string;
  source: string;
  hobbiesLogos: HobbiesLogo[];

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
    this.getHobbiesLogos();
  }

  getTitleAndLogo(): void {
    this.pageService.getDatas(DataBase.resumeTitle).subscribe(x => {
      this.resumeTitle = x;
      this.resumeTitle.find(el => {
        if (el.componentName === 'hobbiesInterests') {
          this.title = el.titleLogo.titleName;
          this.source = el.titleLogo.src;
        }
      });
    });
  }

  getHobbiesLogos(): void {
    this.pageService.getDatas(DataBase.resumeHobbiesLogos).subscribe(x => {
      this.hobbiesLogos = x;
    });
  }
}
