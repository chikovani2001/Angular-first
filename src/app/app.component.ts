import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/services';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',

})
export class AppComponent implements OnInit{
  title: 'blokish' | undefined;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    const canAccess = this.authService.isAuthorized;

    if (canAccess){
      this.router.navigate(['/task']);
      // employee
    }
  }

}
