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

//Typescript Class of Person
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWIthAngular", "#ngOmaha"
  ];
  //Constructor for Person
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`\n Full name: ${this.fullName}\n Favorite Food: ${this.favoriteFood}\n Favorite Color: ${this.favoriteColor}`)
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  //Creating data for Person
  myProfile: Person;
  constructor() {
  this.myProfile = new Person("Rhiannon Kimberlin", "Sushi", "Purple");
  this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
