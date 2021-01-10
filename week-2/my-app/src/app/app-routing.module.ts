/*
============================================
; Title:  kimberlin-assignment-2.2
; Author: Professor Krasso
; Date:   January 9 2021
; Modified By: Rhiannon Kimberlin
; Description: My-App
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Import Statements for Home, Contact and About
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
//Following Code indicates that if URL is unspecified or /home app will show homepage.
  {
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
},
//Following Code indicates that if URL is /contact that the contact page will show
{
  path: 'contact',
  component: ContactComponent
},
//Following Code indicates that if URL is /about that the about page will show
{
  path: 'about',
  component: AboutComponent
}
];

//Generated by Angular CLI
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
