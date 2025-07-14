import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';
import { Title } from '@angular/platform-browser';
import { NavStateService } from '../../service/nav-state.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-garments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garments.component.html',
  styleUrl: './garments.component.css',
})
export class garmentsComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    private NavStateService: NavStateService
  ) {
    this.titleService.setTitle(`${WEBSITE_NAME} Garments`);
  }
  clickOnContactUs() {
    this.router.navigate(['/contact']);
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.NavStateService.toggleNav('garments');
  }

  garmentCategories = [
    {
      title: 'Digital Printing',
      img: '/assets/GarmentsBackGround/garmentBg1.png',
    },
    {
      title: 'Screen Printing',
      img: '/assets/GarmentsBackGround/garmentBg2.png',
    },
    {
      title: 'Hand Block Printing',
      img: '/assets/GarmentsBackGround/garmentBg3.png',
    },
    {
      title: 'Hand Brush Painting',
      img: '/assets/GarmentsBackGround/garmentBg4.png',
    },
    {
      title: 'Spray Painting',
      img: '/assets/GarmentsBackGround/garmentBg5.png',
    },
    {
      title: 'Discharge Printing',
      img: '/assets/GarmentsBackGround/garmentBg6.png',
    },
  ];
}
