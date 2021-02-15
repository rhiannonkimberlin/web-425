/*
============================================
; Title:  kimberlin-assignment-7.2
; Author: Professor Krasso
; Date:   February 11 2021
; Modified By: Rhiannon Kimberlin
; Description: gpa-calculator-app3
;===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  //studentIds set to numberical Array
  studentIds: Array<number>;

  //Only allows the following IDs to be approved
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

   //Determines if match of Ids is found
   validate(studentId: number) {
    return this.studentIds.some(id => id === studentId)
   }
}
