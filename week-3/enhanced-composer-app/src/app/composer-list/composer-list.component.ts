/*
============================================
; Title:  kimberlin-assignment-3.2
; Author: Professor Krasso
; Date:   January 19 2021
; Modified By: Rhiannon Kimberlin
; Description: Enhanced-Composer-app
;===========================================
*/

//Generated from Angular CLI
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {
  // Creating Local IComposer Variable
  composers: Array<IComposer>;
  
  //Constructor to provide array with efined composers
  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
