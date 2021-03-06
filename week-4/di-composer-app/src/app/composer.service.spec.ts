/*
============================================
; Title:  kimberlin-assignment-4.2
; Author: Professor Krasso
; Date:   January 25 2021
; Modified By: Rhiannon Kimberlin
; Description: di-Composer-app
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
