/*
============================================
; Title:  kimberlin-assignment-7.2
; Author: Professor Krasso
; Date:   February 11 2021
; Modified By: Rhiannon Kimberlin
; Description: gpa-calculator-app3
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { 
    
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }

  //Form captures user input information upon submission
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    //If Valid ID is used, User can proceed to GPA calculator, if not User will receive error provided
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The Student ID you entered is invalid, please try again.'
    }
  }
}
