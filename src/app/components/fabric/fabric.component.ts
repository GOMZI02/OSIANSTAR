import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';
import { Title } from '@angular/platform-browser';
import { NavStateService } from '../../service/nav-state.service';
@Component({
  selector: 'app-fabric',
  standalone: true,
  imports: [],
  templateUrl: './fabric.component.html',
  styleUrl: './fabric.component.css',
})
export class FabricComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    private NavStateService: NavStateService
  ) {
    this.titleService.setTitle(`${WEBSITE_NAME} Fabrics`);
  }
  clickOnContactUs() {
    this.router.navigate(['/contact']);
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.NavStateService.toggleNav('fabric');
  }
}
