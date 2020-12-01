import { ResumePageComponent } from './views/resume-page/resume-page.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'resume', component: ResumePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
