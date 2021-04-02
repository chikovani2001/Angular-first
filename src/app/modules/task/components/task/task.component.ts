import { Component, OnInit } from '@angular/core';
import {Task} from '../../../../core/models/task';
import {TaskService} from '../../../../core/services';
import {Employee} from '../../../../core/models/employee';
import {MatDialog} from '@angular/material/dialog';
import {TaskAddOrEditComponent} from '../task-add-or-edit/task-add-or-edit.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  displayedColumns: string[] = ['name', 'employee', 'createAT', 'status', 'action'];
  dataSource: Task[] = [];
  constructor(
    public dialog: MatDialog,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.taskService.get()
      .subscribe(result => {
        this.dataSource = result.map( (m: any)  => {
          return {
            id: m.payload.doc.id,
            ...m.payload.doc.data()
          } as Task;
        });
      });
  }

  addOrEdit(task: Task | null = null) {
    const dialog = this.dialog.open(TaskAddOrEditComponent,{
      data: {
        task
      }
    });
  dialog.afterClosed().subscribe(res => {
    this.getTasks();
  });
  }

  delete(element: any) {
    this.taskService.delete(element.id)
      .then( res => {
        console.log(res);
      });
  }
}
