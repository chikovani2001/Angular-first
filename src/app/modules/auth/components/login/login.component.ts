import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services';
import {MatSnackBar} from '@angular/material/snack-bar';
import firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),

    });
  }

  ngOnInit(): void {
    const canAccess = this.authService.isAuthorized;

    if (canAccess){
      this.router.navigate(['/task']);
    }
  }

  submit(): any{
    if (this.form.invalid) {  return; }
    const {email, password} = this.form.value;
    this.authService.login(email, password)
      .then( auth => {
        this.snackBar.open('ავტორიზაცია წარმატებულია !' , 'close', {
          duration: 0.5,
        });
        this.router.navigate(['/task']);
      })
      .catch( error => {
        this.snackBar.open('ასეთი მომხარებელი არ არსებობს !' , 'close', {
          duration: 1000,
        });
      });
  }
}

