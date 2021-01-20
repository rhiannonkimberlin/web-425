/*
============================================
; Title:  kimberlin-assignment-3.2
; Author: Professor Krasso
; Date:   January 19 2021
; Modified By: Rhiannon Kimberlin
; Description: Enhanced-Composer-app
;===========================================
*/

import { Component, OnInit } from '@angular/core';
//Adding Import Statements
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  //How to view routes based on defined values
  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
    
    //ensures composerId has a value
    if (this.composerId){
      this.composer = new Composer().getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
