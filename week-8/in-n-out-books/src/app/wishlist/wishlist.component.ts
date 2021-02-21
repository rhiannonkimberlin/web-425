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
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  //Empty Array for items <IWishList>
  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  //Takes wishlist items and pushes into items array
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
