/*
============================================
; Title:  kimberlin-assignment-2.3
; Author: Professor Krasso
; Date:   January 9 2021
; Modified By: Rhiannon Kimberlin
; Description: Enhanced-Profile-App
;===========================================
*/

//Generated from Angular CLI
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
