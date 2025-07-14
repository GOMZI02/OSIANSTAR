import { Component } from '@angular/core';
import { NavStateService } from '../../service/nav-state.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';
@Component({
  selector: 'app-bags',
  imports: [],
  standalone: true,
  templateUrl: './bags.component.html',
  styleUrl: './bags.component.css',
})
export class BagsComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    private NavStateService: NavStateService
  ) {
    this.titleService.setTitle(`${WEBSITE_NAME} Bags`);
  }
  clickOnContactUs() {
    this.router.navigate(['/contact']);
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.NavStateService.toggleNav('bags');
  }
}
