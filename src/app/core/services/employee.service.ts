import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFirestore, QuerySnapshot} from '@angular/fire/firestore';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private Firestore: AngularFirestore
  ) {
  }
  getEmployees(): Observable<any>{
    return this.Firestore.collection('employees').snapshotChanges();
  }
  getEmployeeById(id: string): Observable<any>{
    return this.Firestore.collection('employees/').doc(id).get();
  }

  async addEmployees(employee: Employee): Promise<any>{
    delete employee.id;
    return await this.Firestore.collection('employees').add(employee);
  }
  async deleteEmployees(employeeId: any): Promise<any>{
    return await this.Firestore.collection('employees').doc(employeeId).delete();
  }

  async updateEmployees(employee: Employee): Promise<any>{
    const employeeId = employee.id;
    delete employee.id;
    return await this.Firestore.collection('employees').doc(employeeId).update(employee);
  }
}
