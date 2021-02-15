/*
============================================
; Title:  kimberlin-assignment-7.2
; Author: Professor Krasso
; Date:   February 11 2021
; Modified By: Rhiannon Kimberlin
; Description: gpa-calculator-app3
;===========================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');

    //If valid ID is used, User may proceed to GPA calculator. If not, User is prompted to put in correct ID
    if(sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }

}
