import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../auth/components/login/login.component';
import {RegisterComponent} from '../auth/components/register/register.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
