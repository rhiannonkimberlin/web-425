/*
============================================
; Title:  kimberlin-assignment-6.2
; Author: Professor Krasso
; Date:   February 4 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp4
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
   }

  ngOnInit(): void {
  }

}
