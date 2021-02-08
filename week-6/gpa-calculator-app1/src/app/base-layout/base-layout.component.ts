/*
============================================
; Title:  kimberlin-assignment-6.3
; Author: Professor Krasso
; Date:   February 4 2021
; Modified By: Rhiannon Kimberlin
; Description: gpa-calculator-app1
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string; 

  constructor() {
    //Assignment Name Displays in base-layout.component.html
    this.assignment= 'Exercise 6.3 - GPA Calculator'
   }

  ngOnInit(): void {
  }

}
