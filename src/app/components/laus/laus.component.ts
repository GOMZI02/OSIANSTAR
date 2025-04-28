import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';
import { Title } from '@angular/platform-browser';
import { NavStateService } from '../../service/nav-state.service';
@Component({
  selector: 'app-laus',
  standalone: true,
  imports: [],
  templateUrl: './laus.component.html',
  styleUrl: './laus.component.css',
})
export class lausComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    private NavStateService: NavStateService
  ) {
    this.titleService.setTitle(`${WEBSITE_NAME} Laus`);
  }
  clickOnContactUs() {
    this.router.navigate(['/contact']);
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.NavStateService.toggleNav('laus');
  }
}
