import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './../services/auth-guard.service';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'blog', component: DashboardComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  providers: []
})
export class LoginModule { }


