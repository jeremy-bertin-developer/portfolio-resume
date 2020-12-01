import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from '../app/views/main-page/main-header/main-header.component';
import { MainPageComponent } from '../app/views/main-page/main-page.component';
import { LogoLanguagesComponent } from '../app/views/main-page/main-projects/logo-languages/logo-languages.component';
import { MainProjectsComponent } from '../app/views/main-page/main-projects/main-projects.component';
import { LineSeparationComponent } from './core/shared/line-separation/line-separation.component';
import { TitlesComponent } from './core/shared/titles/titles.component';
import { ResumePageComponent } from './views/resume-page/resume-page.component';
import { SideNavbarComponent } from './views/side-navbar/side-navbar.component';
import { ResumeProfileComponent } from './views/resume-page/resume-profile/resume-profile.component';
import { ResumeTitleComponent } from './core/shared/resume-title/resume-title.component';
import { ResumeProfesionalExperiencesComponent } from './views/resume-page/resume-profesional-experiences/resume-profesional-experiences.component';
import { ResumeCoursesTrainingsComponent } from './views/resume-page/resume-courses-trainings/resume-courses-trainings.component';
import { ResumeProgrammingLanguagesComponent } from './views/resume-page/resume-programming-languages/resume-programming-languages.component';
import { ResumeStudiesComponent } from './views/resume-page/resume-studies/resume-studies.component';
import { ResumeLanguagesComponent } from './views/resume-page/resume-languages/resume-languages.component';
import { ResumeHobbiesComponent } from './views/resume-page/resume-hobbies/resume-hobbies.component';
import { ResumeTestimoniesComponent } from './views/resume-page/resume-testimonies/resume-testimonies.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainHeaderComponent,
    LineSeparationComponent,
    MainProjectsComponent,
    TitlesComponent,
    LogoLanguagesComponent,
    ResumePageComponent,
    SideNavbarComponent,
    ResumeProfileComponent,
    ResumeTitleComponent,
    ResumeProfesionalExperiencesComponent,
    ResumeCoursesTrainingsComponent,
    ResumeProgrammingLanguagesComponent,
    ResumeStudiesComponent,
    ResumeLanguagesComponent,
    ResumeHobbiesComponent,
    ResumeTestimoniesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
