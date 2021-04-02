import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirm_password: [null, [Validators.required]],

    }, {validator: this.chekPasswords});
  }

  ngOnInit(): void {
    const canAccess = this.authService.isAuthorized;

    if (canAccess){
      this.router.navigate(['/task']);
    }
  }

  chekPasswords(group: FormGroup){
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirm_password.value;
    return pass === confirmPass ? null : {notSame: true};
  }

  submit() {
    if (this.form.invalid) { return; }
    const {email, password} = this.form.value;

    this.authService.register(email, password)
      .then( auth => {
        this.snackBar.open('თქვენ წარმატებით გაიარეთ რეგისტრაცია!' , 'close', {
          duration: 2000,
        });
        this.router.navigate(['/auth']);
      })
      .catch(error => {
        this.snackBar.open(error.message , 'close', {
          duration: 2000,
        });
      });

  }
}
