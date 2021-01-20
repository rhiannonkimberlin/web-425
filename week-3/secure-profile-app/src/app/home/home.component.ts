/*
============================================
; Title:  kimberlin-assignment-3.3
; Author: Professor Krasso
; Date:   January 19 2021
; Modified By: Rhiannon Kimberlin
; Description: Secure-Profile-App
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: Boolean;
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'))
   }

  ngOnInit(): void {
  }

}
