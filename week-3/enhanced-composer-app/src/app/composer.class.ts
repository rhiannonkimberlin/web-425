/*
============================================
; Title:  kimberlin-assignment-3.2
; Author: Professor Krasso
; Date:   January 19 2021
; Modified By: Rhiannon Kimberlin
; Description: Enhanced-Composer-app
;===========================================
*/


//Import IComposer 
import { IComposer } from './composer.interface';
export class Composer {
  composers: Array<IComposer>;
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

getComposers(){
    return this.composers;
};

//Returns composer matching with ID
getComposer(composerId: number){
    for(let composer of this.composers) {
        if (composer.composerId === composerId){
            return composer;
        }
    }
}
};