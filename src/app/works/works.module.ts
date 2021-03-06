import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';

import { RouterModule, Routes } from '@angular/router';
import { NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path:'', component: WorkComponent }
];


@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ]
})
export class WorksModule { }






