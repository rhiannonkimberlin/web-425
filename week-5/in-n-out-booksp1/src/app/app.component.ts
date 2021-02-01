/*
============================================
; Title:  kimberlin-assignment-5.2
; Author: Professor Krasso
; Date:   February 1 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp1
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Defining assignment
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.2 - Navigation and Layout'
  }
  
}
