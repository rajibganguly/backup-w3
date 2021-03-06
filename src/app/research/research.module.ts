
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResearchComponent } from './research/research.component';
import { NasaSateComponent } from './nasa-sate/nasa-sate.component';

const routes: Routes = [
  {path:'', component: ResearchComponent}
];

@NgModule({
  declarations: [
    NasaSateComponent,
    ResearchComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class ResearchModule { }










