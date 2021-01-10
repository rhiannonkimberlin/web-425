/*
============================================
; Title:  kimberlin-assignment-2.4
; Author: Professor Krasso
; Date:   January 10 2021
; Modified By: Rhiannon Kimberlin
; Description: Composer-app
;===========================================
*/

//Import from Angular CLI
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Adding in Imports for About, Contact Us and Composer List
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';

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
