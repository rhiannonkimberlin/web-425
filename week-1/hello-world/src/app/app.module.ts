/*
============================================
; Title:  kimberlin-assignment-1.3
; Author: Professor Krasso
; Date:   December 19 2020
; Modified By: Rhiannon Kimberlin
; Description: Hello World!
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
