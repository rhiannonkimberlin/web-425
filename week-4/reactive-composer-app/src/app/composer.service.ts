/*
============================================
; Title:  kimberlin-assignment-4.3
; Author: Professor Krasso
; Date:   January 25 2021
; Modified By: Rhiannon Kimberlin
; Description: Reactive-Composer-app
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
    composers:Array<IComposer>;

    //Defined Composers to retrieve
    constructor() { 
        this.composers = [
        {
            composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
        },
        {
            composerId: 101, fullName: "Fryderyck Chopin", genre: "Classical"
        },
        {
            composerId: 102, fullName: "Johannes Brahm", genre: "Classical"
        },
        {
            composerId: 103, fullName: "Johann Bach", genre: "Classical"
        },
        {
            composerId: 104, fullName: "Wolfgang Mozart", genre: "Classical"
        },
    ]};

//data access for composer objects
getComposers(){
    return this.composers;
};

//Returns composer matching with ID
getComposer(composerId: number){
    //loops to find matching ID
    for(let composer of this.composers) {
        //if ID matches, return composer
        if (composer.composerId === composerId){
            return composer;
        }
    }
}
};