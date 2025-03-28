import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'OSIANSTAR';
  homeClass: any;
  fabricClass: any;
  aboutClass: any;
  ClassBlack: any;
  ClassBackGround: any;

  constructor(private router: Router) {}
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  toggleHomeNav(event: any) {
    let navbutton = document.getElementById('home-nav-toggle');
    if (navbutton != undefined && navbutton != null) {
      (navbutton as HTMLButtonElement).click();
    }
  }
  toggleNav(clickedItem: string) {
    if (clickedItem == 'about' || clickedItem == 'contact') {
      this.ClassBlack = 'black-links';
      this.ClassBackGround = 'bgLink';
    } else {
      this.ClassBlack = 'white-links';
      this.ClassBackGround = '';
    }
  }
}
