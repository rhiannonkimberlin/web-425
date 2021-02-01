/*
============================================
; Title:  kimberlin-assignment-5.4
; Author: Professor Krasso
; Date:   February 1 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp3
;===========================================
*/

//imported from angular
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import {MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  //observable
  books: Observable<IBook[]>;
  // headers on book-list
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;

   
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }

  //using isbn correct book will be logged in dialog box
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);

    //After dialog box closes, book variable is set to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null
        }
      });
  }
}