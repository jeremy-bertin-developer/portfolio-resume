import { PageService } from './../../page.service';
import { Component, OnInit } from '@angular/core';
import { DataBase } from 'src/app/core/util/data-base';
import { Image } from 'src/app/core/util/models/image';
import { Project } from './../../../core/util/models/project';

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.css']
})
export class MainProjectsComponent implements OnInit {
  logosLanguage: Image[];
  projects: Project[];

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.getLogo();
    this.getProjects();
  }

  getLogo(): void {
    this.pageService.getDatas(DataBase.logosLanguage).subscribe(x => {
      console.log(x);
      this.logosLanguage = x;
    });
  }

  getProjects(): void {
    this.pageService.getDatas(DataBase.projects).subscribe(x => {
      console.log(x);
      this.projects = x;
    });
  }

  showProject(logoType: string): void {
    this.getProjects();
    const arrayTypeOfProject: Project[] = [];

    for (const typeOfProject of this.projects) {
      for (const projectType of typeOfProject.projectType) {
        if (projectType === logoType) {
          arrayTypeOfProject.push(typeOfProject);
          typeOfProject.isShown = true;
        } else if (projectType !== logoType) {
          typeOfProject.isShown = false;
        }
      }
    }
    this.projects = arrayTypeOfProject;
  }

  showAllProjects(): void {
    for (const typeOfProject of this.projects) {
      typeOfProject.isShown = true;
    }
    this.projects = DataBase.projects;
  }

  openProject(link: string): void {
    window.open(link);
  }
}
