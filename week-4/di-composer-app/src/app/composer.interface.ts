/*
============================================
; Title:  kimberlin-assignment-4.2
; Author: Professor Krasso
; Date:   January 25 2021
; Modified By: Rhiannon Kimberlin
; Description: di-Composer-app
;===========================================
*/

//Composers defined in  compoer.service.ts will be shown in the composer.class file
export interface IComposer {
    composerId: number;
    fullName: string;
    genre: string;
}