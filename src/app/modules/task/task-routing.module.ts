import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from '../employee/components/employee-list/employee-list.component';
import {TaskModule} from './task.module';
import {TaskComponent} from './components/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
