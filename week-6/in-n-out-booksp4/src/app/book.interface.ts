/*
============================================
; Title:  kimberlin-assignment-6.2
; Author: Professor Krasso
; Date:   February 4 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp4
;===========================================
*/

//defining iBook and values
export interface IBook {
    isbn: string;
    title: string;
    description: string;
    numOfPages: number;
    authors: Array<string>;
}