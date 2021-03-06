import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ResumeviewComponent } from './resume/resumeview/resumeview.component';

import { NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  {path:'', component: ResumeComponent}
];


@NgModule({
  declarations: [
    ResumeComponent,
    ResumeviewComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ]
})
export class ResumeModule { }



