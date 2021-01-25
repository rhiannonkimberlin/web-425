/*
============================================
; Title:  kimberlin-assignment-4.2
; Author: Professor Krasso
; Date:   January 25 2021
; Modified By: Rhiannon Kimberlin
; Description: di-Composer-app
;===========================================
*/

//Generated from Angular CLI
import { Component, OnInit } from '@angular/core';
//Importing IComposer and Composer Service
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private ComposerService: ComposerService) {
    //Dependency Injection (DI) feature
    this.composers = this.ComposerService.getComposers();
   }

  ngOnInit(): void {
  }

}