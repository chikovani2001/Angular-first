import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MaterialModule} from '../material/material.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [

  LoginComponent,
  RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,

  ]
})
export class AuthModule { }
