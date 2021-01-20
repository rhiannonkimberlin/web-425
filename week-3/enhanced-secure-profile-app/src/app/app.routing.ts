/*
============================================
; Title:  kimberlin-assignment-3.4
; Author: Professor Krasso
; Date:   January 19 2021
; Modified By: Rhiannon Kimberlin
; Description: Enhanced-secure-Profile-App
;===========================================
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard } from './sign-in.guard';


//Defined routes that take user to component
export const AppRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        //SignInGuard hides home from user if they are not logged in
        canActivate: [SignInGuard]
    },
]