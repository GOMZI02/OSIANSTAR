import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  videoStarted = false;
  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle(`${WEBSITE_NAME} Home`);
  }

  clickOnAboutUs() {
    this.router.navigate(['/aboutUs']);
  }
  clickOnPlay() {
    window.open('https://www.youtube.com/watch?v=-M0uRHglTXw');
  }
  clickOnFabric() {
    this.router.navigate(['/fabric']);
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const priorityImage = new Image();
    priorityImage.fetchPriority = 'high';
    priorityImage.src = 'assets/Card/card1car.png';
  }

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  playVideo() {
    this.videoStarted = true;
    setTimeout(() => {
      this.videoPlayer.nativeElement.play();
    }, 100);
  }
}
