/*
============================================
; Title:  kimberlin-assignment-5.3
; Author: Professor Krasso
; Date:   February 1 2021
; Modified By: Rhiannon Kimberlin
; Description: in-n-out-booksp2
;===========================================
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9781947591806',
        title: 'Half-Blood',
        description: 'Book One of the Convenant Series. The Hematoi descend from the unions of gods and mortals, and the children of two Hematoi—pure-bloods—have godlike powers. Children of Hematoi and mortals—well, not so much. Half-bloods only have two options: become trained Sentinels who hunt and kill daimons or become servants in the homes of the pures. Seventeen-year-old Alexandria would rather risk her life fighting than waste it scrubbing toilets. Alex must stay alive long enough to graduate from the Convenant and become a Sentinel. If she fails in her suty, she faces a future worse than death or slavery: being turned into a daimon and being hunted.',
        numOfPages: 406,
        authors: ['Jennifer L. Armentrout']
      },
      {
        isbn: '9781947591981',
        title: 'Pure',
        description: 'Book Two of the Convenant Series. When daimons infiltrate the Covenants and attack students, the gods send furies—lesser gods determined to eradicate any threat to the Covenants and to the gods, and that includes the Apollyon... and Alex. And if that and hordes of aether-sucking monsters didn’t blow bad enough, a mysterious threat seems willing to do anything to neutralize Seth, even if that means forcing Alex into servitude... or killing her. When the gods are involved, some decisions can never, ever be undone.',
        numOfPages: 416,
        authors: ['Jennifer L. Armentrout']
      },
      {
        isbn: '9781947591875',
        title: 'Deity',
        description: 'Book Three of the Convenant Series. As Alexs birthday draws near, her entire world shatters with a startling revelation and shes caught between love and Fate. One will do anything to protect her. One has been lying to her since the beginning. Once the gods have revealed themselves, unleashing their wrath, lives will be irrevocably changed... and destroyed. Those left standing will discover if love is truly greater than Fate...',
        numOfPages: 494,
        authors: ['Jennifer L. Armentrout']
      },
      {
        isbn: '9781947591943',
        title: 'Apollyon',
        description: 'Book Four of the Convenant Series. The gods have killed thousands and could destroy entire cities in their quest to stop Seth from taking Alexs power and becoming the all-powerful God Killer. But breaking Alexs connection to Seth isnt the only problem. There are a few pesky little loopholes in the whole an Apollyon cant be killed theory, and the only person who might know how to stop the destruction has been dead for centuries. ',
        numOfPages: 412,
        authors: ['Jennifer L. Armentrout']
      },
      {
        isbn: '9781947591967',
        title: 'Sentinel',
        description: 'Book Five of the Convenant Series. In the stunning, action-packed climax to the bestselling Covenant series, Alex must face a terrible choice: the destruction of everything and everyone she holds dear… or the end of herself.',
        numOfPages: 364,
        authors: ['Jennifer L. Armentrout']
      }
    ]
   }

   //observable for books objects
   getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  //For Loop to use ISBN to find specific book
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
       }
     }
   }
}
