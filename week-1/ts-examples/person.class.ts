/*
============================================
; Title:  kimberlin-exercise-1.4
; Author: Professor Krasso
; Date:   December 19
; Modified By: Rhiannon Kimberlin
; Description: ts-examples
;===========================================
*/

import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Rhiannon", "Kimberlin");
console.log(`My name is ${myName.firstName} ${myName.lastName}`)