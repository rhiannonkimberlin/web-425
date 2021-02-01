/*
============================================
; Title:  kimberlin-assignment-5.3
; Author: Professor Krasso
; Date:   February 1 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp2
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
    this.assignment = 'Exercise 5.3 - Data Table'
  }
  
}
