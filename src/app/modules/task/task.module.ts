import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './components/task/task.component';
import {MaterialModule} from '../material/material.module';
import { TaskAddOrEditComponent } from './components/task-add-or-edit/task-add-or-edit.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [TaskComponent, TaskAddOrEditComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MaterialModule,
    MatIconModule,
    FormsModule
  ]
})
export class TaskModule { }
