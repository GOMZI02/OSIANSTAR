import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';
import { NavStateService } from '../../service/nav-state.service';

@Component({
  selector: 'app-scarves',
  imports: [],
  standalone: true,
  templateUrl: './scarves.component.html',
  styleUrl: './scarves.component.css',
})
export class ScarvesComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    private NavStateService: NavStateService
  ) {
    this.titleService.setTitle(`${WEBSITE_NAME} Scarves`);
  }
  clickOnContactUs() {
    this.router.navigate(['/contact']);
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.NavStateService.toggleNav('scarves');
  }
}
