/*
============================================
; Title:  kimberlin-assignment-5.4
; Author: Professor Krasso
; Date:   February 1 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp3
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