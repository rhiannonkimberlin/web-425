/*
============================================
; Title:  kimberlin-assignment-6.2
; Author: Professor Krasso
; Date:   February 4 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp4
;===========================================
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //Utilizes API's to call ISBN's
  isbns: Array<number> = [
    345339681,
    261103571,
    9780593099322,
    9780261102361,
    9780261102378,
    //Charlotte's web did not populate with provided ISBN. Corrected ISBN.
    9780061124952,
    9780316769532,
    9780743273565,
    9780590405959
  ]

  //HTTPClient added 
  constructor(private http: HttpClient) {
    
   }

   //observable for books objects
   getBooks() {
   let params = new HttpParams();

   params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
   params = params.append('format', 'json');
   params = params.append('jscmd', 'details');

   return this.http.get('https://openlibrary.org/api/books', {params: params})
   }


}
