/*
============================================
; Title:  kimberlin-assignment-4.4
; Author: Professor Krasso
; Date:   January 25 2021
; Modified By: Rhiannon Kimberlin
; Description: Enterprise-Composer-app
;===========================================
*/

//Generated from Angular CLI
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {
  //Composers updated to observable from rxjs
  composers: Observable<IComposer>;
  //Provides Form control for txtSearchControl
  txtSearchControl = new FormControl('');

  constructor(private ComposerService: ComposerService) {
    //Dependency Injection (DI) from angular
    this.composers = this.ComposerService.getComposers();
    //txtSearchControl looks at what is in the search bar in composer-list.html.
    //debounce slows down the number of times filterComposer function is called
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }

filterComposers(name: string){
  alert(name);
}

}