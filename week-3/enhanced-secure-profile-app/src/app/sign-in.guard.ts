/*
============================================
; Title:  kimberlin-assignment-3.4
; Author: Professor Krasso
; Date:   January 19 2021
; Modified By: Rhiannon Kimberlin
; Description: Enhanced-secure-Profile-App
;===========================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
    //isLoggedIn variable from signin.component.ts
    let isLoggedIn = next.queryParams.isLoggedIn;

    //If True Users can access home page once credentials are entered
    if(isLoggedIn) {
      return true;
    }

    //If False, users cannot see home and will be navigated to signin
    else{
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
