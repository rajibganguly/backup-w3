import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SortingLatestPipe } from './../sortinglatest.pipe';

const routes: Routes = [
  {path:'', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    SortingLatestPipe
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class HomeModule { }
