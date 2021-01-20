/*
============================================
; Title:  kimberlin-assignment-3.2
; Author: Professor Krasso
; Date:   January 19 2021
; Modified By: Rhiannon Kimberlin
; Description: Enhanced-Composer-app
;===========================================
*/

//Import from Angular CLI
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Adding in Imports for About, Contact Us and Composer List
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
//Adding in Import for new component created
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

//Adding in Routes for About, Contact Us and Composer List
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    //Allows path to use ID to direct user
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
