import { Component } from '@angular/core';
import { NavStateService } from '../../service/nav-state.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';

@Component({
  selector: 'app-sister-concern',
  imports: [],
  templateUrl: './sister-concern.component.html',
  styleUrl: './sister-concern.component.css',
})
export class SisterConcernComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    private NavStateService: NavStateService
  ) {
    this.titleService.setTitle(`${WEBSITE_NAME} Sister-Concern`);
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.NavStateService.toggleNav('sister-concern');
  }
}
