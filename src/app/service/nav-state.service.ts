import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavStateService {
  private activeLinkSubject = new BehaviorSubject<string>('');
  private linkClassSubject = new BehaviorSubject<string>('white-links');
  private bgClassSubject = new BehaviorSubject<string>('');

  activeLink$ = this.activeLinkSubject.asObservable();
  linkClass$ = this.linkClassSubject.asObservable();
  bgClass$ = this.bgClassSubject.asObservable();

  // Set the active link
  setActiveLink(link: string): void {
    this.activeLinkSubject.next(link);
    this.setLinkAndBackgroundClasses(link);
  }

  // Set link and background classes based on the clicked link
  private setLinkAndBackgroundClasses(link: string): void {
    if (link === 'about' || link === 'contact') {
      this.linkClassSubject.next('black-links');
      this.bgClassSubject.next('bgLink');
    } else {
      this.linkClassSubject.next('white-links');
      this.bgClassSubject.next('');
    }
  }

  constructor() {}
}
