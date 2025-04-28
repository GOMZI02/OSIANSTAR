import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavStateService {
  private classBlackSource = new Subject<string>();
  private classBackgroundSource = new Subject<string>();

  classBlack$ = this.classBlackSource.asObservable();
  classBackground$ = this.classBackgroundSource.asObservable();

  toggleNav(clickedItem: string) {
    let classBlack = '';
    let classBackground = '';

    if (
      clickedItem === 'about' ||
      clickedItem === 'contact' ||
      clickedItem === 'sister-concern'
    ) {
      classBlack = 'black-links';
      classBackground = 'bgLink';
    } else {
      classBlack = 'white-links';
      classBackground = '';
    }

    // Emit the updated class names
    this.classBlackSource.next(classBlack);
    this.classBackgroundSource.next(classBackground);
  }

  constructor() {}
}
