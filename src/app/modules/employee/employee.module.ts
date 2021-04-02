import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddOrEditComponent } from './components/employee-add-or-edit/employee-add-or-edit.component';
import {MaterialModule} from '../material/material.module';
import {MatSelectModule} from '@angular/material/select';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeAddOrEditComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    SharedModule,
    MatIconModule,

  ]
})
export class EmployeeModule { }
