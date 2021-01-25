/*
============================================
; Title:  kimberlin-assignment-4.3
; Author: Professor Krasso
; Date:   January 25 2021
; Modified By: Rhiannon Kimberlin
; Description: Reactive-Composer-app
;===========================================
*/

import { Component, OnInit } from '@angular/core';
//Adding Import Statements
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router'; 
import { ComposerService } from '../composer.service'

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  //How to view routes based on defined values
  constructor(private route: ActivatedRoute, private ComposerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
    
    //ensures composerId has a value
    if (this.composerId){
      this.composer = this.ComposerService.getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
