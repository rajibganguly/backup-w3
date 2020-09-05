import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WorkComponent } from './components/work/work.component';
import { PrivacyPolicy } from './components/not-found/privacy-policy';
import { ResearchComponent } from './components/research/research.component';


const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'work', component: WorkComponent},
  {path:'home', component: HomeComponent},
  {path:'links', component: LinksComponent},
  {path:'resume', component: ResumeComponent},
  {path:'research', component: ResearchComponent},
  {path:'privacy', component: PrivacyPolicy},
  {path: '', redirectTo: 'NotFoundComponent', pathMatch: 'full'},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
