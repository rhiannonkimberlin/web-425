/*
============================================
; Title:  kimberlin-assignment-2.4
; Author: Professor Krasso
; Date:   January 10 2021
; Modified By: Rhiannon Kimberlin
; Description: Composer-app
;===========================================
*/

//Generated from Angular CLI
import { Component, OnInit } from '@angular/core';

//Creating Composer
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName:string, genre:string){
    this.fullName = fullName;
    this.genre = genre;
  }
     toString() {
    console.log(`\n Full name: ${this.fullName} \n Genre: ${this.genre}`)
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {
  // Creating Composer Variable
  composers: Array<Composer>;
  constructor() {
    this.composers = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Fryderyk Chopin", "Classical"),
      new Composer("Johannes Brahm", "Classical"),
      new Composer("Johann Bach", "Classical"),
      new Composer("Wolfgang Mozart", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
