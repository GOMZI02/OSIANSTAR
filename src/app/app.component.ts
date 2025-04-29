import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavStateService } from './service/nav-state.service';
import { filter } from 'rxjs';
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
  ClassBlack: string = '';
  ClassBackGround: string = '';
  hideSisterConcern: boolean = false;
  constructor(
    private router: Router,
    private NavStateService: NavStateService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Hide section only on 'sister-concern' route
        this.showWhySection = !event.url.includes('sister-concern');
      });
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.showOrHideSisterConcern();
    this.NavStateService.classBlack$.subscribe((classBlack) => {
      this.ClassBlack = classBlack;
    });

    this.NavStateService.classBackground$.subscribe((classBackground) => {
      this.ClassBackGround = classBackground;
    });

    this.setInitialNavbarState();

    // Listen for route changes and update the navbar state
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setInitialNavbarState();
      });
  }

  private setInitialNavbarState() {
    const currentRoute = this.router.url;

    if (
      currentRoute.includes('about') ||
      currentRoute.includes('contact') ||
      currentRoute.includes('sister-concern')
    ) {
      this.NavStateService.toggleNav('about'); // You can call 'about' for both 'about' and 'contact' pages
    } else {
      this.NavStateService.toggleNav(''); // Reset to default
    }
  }

  showOrHideSisterConcern() {
    console.log(this.router.events, '88');
    let routerLinkName = this.router.config;
    let foundrouterlink = routerLinkName.find(
      (x) => x.path == 'sister-concern'
    );
    console.log(foundrouterlink);
    if (foundrouterlink && foundrouterlink.path === 'sister-concern') {
      this.hideSisterConcern = true;
    } else {
      this.hideSisterConcern = false;
    }
  }

  showWhySection = true;

  // toggleHomeNav(event: any) {
  //   let navbutton = document.getElementById('home-nav-toggle');
  //   if (navbutton != undefined && navbutton != null) {
  //     (navbutton as HTMLButtonElement).click();
  //   }
  // }
  // toggleNav(clickedItem: string) {
  //   if (clickedItem == 'about' || clickedItem == 'contact') {
  //     this.ClassBlack = 'black-links';
  //     this.ClassBackGround = 'bgLink';
  //   } else {
  //     this.ClassBlack = 'white-links';
  //     this.ClassBackGround = '';
  //   }
  // }
}
