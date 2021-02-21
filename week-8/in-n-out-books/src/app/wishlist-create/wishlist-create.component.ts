/*
============================================
; Title:  kimberlin-assignment-6.2
; Author: Professor Krasso
; Date:   February 4 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp4
;===========================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface'

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  //Output with EventEmitter for IWishlistItem
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  //Variable named item with IWishlistItem
  item: IWishlistItem;

  constructor() { 
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  //Function to add items to wishlist with addItem is used
  addItem(){
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item={} as IWishlistItem;
  }
}
