/*
============================================
; Title:  kimberlin-assignment-5.3
; Author: Professor Krasso
; Date:   February 1 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp2
;===========================================
*/

//imported from angular
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
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

   
    constructor(private booksService: BooksService) {
      this.books = this.booksService.getBooks();
     }

    ngOnInit(): void {
    }
  //using isbn correct book will be logged
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}