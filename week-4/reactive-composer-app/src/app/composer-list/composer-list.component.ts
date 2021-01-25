/*
============================================
; Title:  kimberlin-assignment-4.3
; Author: Professor Krasso
; Date:   January 25 2021
; Modified By: Rhiannon Kimberlin
; Description: Reactive-Composer-app
;===========================================
*/

//Generated from Angular CLI
import { Component, OnInit } from '@angular/core';
//Import IComposer, ComposerService, FormControl and debounce time
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  //Property called composers with array of IComposer
  composers: Array<IComposer>;
  //Creates FormControl
  txtSearchControl = new FormControl('');
  
  constructor(private ComposerService: ComposerService) {
    //Dependency Injection (DI)
    this.composers = this.ComposerService.getComposers();
//txtSearchControl looks at what is in the search bar in composer-list.html.
    //debounce slows down the number of times filterComposer function is called
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }
//Alert
filterComposers(name: string){
  alert(name);
}

}