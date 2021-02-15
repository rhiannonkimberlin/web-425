/*
============================================
; Title:  kimberlin-assignment-7.2
; Author: Professor Krasso
; Date:   February 11 2021
; Modified By: Rhiannon Kimberlin
; Description: gpa-calculator-app3
;===========================================
*/
import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
