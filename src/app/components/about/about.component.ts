import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';
import { NavStateService } from '../../service/nav-state.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(
    private titleService: Title,
    private NavStateService: NavStateService
  ) {
    this.titleService.setTitle(`${WEBSITE_NAME} About`);
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.NavStateService.toggleNav('about');
  }
}
