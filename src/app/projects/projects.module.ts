import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links/links.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'', component: LinksComponent }
];

@NgModule({
  declarations: [
    LinksComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ProjectsModule { }
