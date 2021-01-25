/*
============================================
; Title:  kimberlin-assignment-4.4
; Author: Professor Krasso
; Date:   January 25 2021
; Modified By: Rhiannon Kimberlin
; Description: Enterprise-Composer-app
;===========================================
*/


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ComposerService {
    //Array of the imported IComposer
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

    //Data acceess for the composer objects
    getComposers(): Observable<IComposer[]> {
        return of(this.composers);
      }

      //Uses the typed in ID to determine what composer to return
      getComposer(composerId: number) {
        //loops over composers to determine which composer to return based on ID
        for (let composer of this.composers) {
          //Once ID is found, returns the appropriate composer
          if (composer.composerId === composerId) {
            return composer;
          }
        }
      }
            //This loads data reactively according to the search function
            filterComposer(name: string): Observable<IComposer[]> {
              
              //Pipe is an operator, map is used to return array of objects, filter function filters through the array
              return of(this.composers).pipe(
          map(composers =>
            composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1))
        )
      }
    }