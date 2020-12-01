import { Component, Input, OnInit } from '@angular/core';
import { DataBase } from 'src/app/core/util/data-base';
import { ProfileAvatar } from './../../../core/util/models/profile-avatar';
import { ProfileSkills } from './../../../core/util/models/profile-skills';
import { ResumeTitle } from './../../../core/util/models/resume-title';
import { PageService } from './../../page.service';

@Component({
  selector: 'app-resume-profile',
  templateUrl: './resume-profile.component.html',
  styleUrls: ['./resume-profile.component.css']
})
export class ResumeProfileComponent implements OnInit {
  private _sectionId: string;

  profileSkills: ProfileSkills[];
  profileAvatars: ProfileAvatar[];
  resumeTitle: ResumeTitle[];
  title: string;
  source: string;

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
    this.getProfileSkills();
    this.getProfileAvatars();
  }

  getTitleAndLogo(): void {
    this.pageService.getDatas(DataBase.resumeTitle).subscribe(x => {
      this.resumeTitle = x;
      this.resumeTitle.find(el => {
        if (el.componentName === 'profile') {
          this.title = el.titleLogo.titleName;
          this.source = el.titleLogo.src;
        }
      });
    });
  }

  getProfileSkills(): void {
    this.pageService.getDatas(DataBase.profileSkills).subscribe(x => {
      this.profileSkills = x;
    });
  }

  getProfileAvatars(): void {
    this.pageService.getDatas(DataBase.profileAvatars).subscribe(x => {
      this.profileAvatars = x;
    });
  }
}
