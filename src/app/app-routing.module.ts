import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrivacyPolicy } from './components/not-found/privacy-policy';


const routes: Routes = [
  {path:'', component: LandingpageComponent},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'links',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'work',
    loadChildren: () => import('./works/works.module').then(m => m.WorksModule)
  },
  {
    path: 'research',
    loadChildren: () => import('./research/research.module').then(m => m.ResearchModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
  },
  {path:'privacy', component: PrivacyPolicy},
  {path: '', redirectTo: 'NotFoundComponent', pathMatch: 'full'},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
