
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResearchComponent } from './research/research.component';
import { NasaSateComponent } from './nasa-sate/nasa-sate.component';
import { AdviceAPIComponent } from './advice-api/advice-api.component';
import { AstrologyComponent } from './astrology/astrology.component';

const routes: Routes = [
  {path:'', component: ResearchComponent}
];

@NgModule({
  declarations: [
    NasaSateComponent,
    ResearchComponent,
    AdviceAPIComponent,
    AstrologyComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class ResearchModule { }










