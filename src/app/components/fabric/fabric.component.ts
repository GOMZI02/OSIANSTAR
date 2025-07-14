import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WEBSITE_NAME } from '../../webconfig/websitesetting';
import { Title } from '@angular/platform-browser';
import { NavStateService } from '../../service/nav-state.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-fabric',
  standalone: true,
  imports: [CommonModule],
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
  printStyles = [
    { icon: '🌸', label: 'Floral' },
    { icon: '🔷', label: 'Geometric' },
    { icon: '🎨', label: 'Bandhej' },
    { icon: '🧵', label: 'Patola' },
    { icon: '🌀', label: 'Shibori' },
    { icon: '🖌️', label: 'Texture' },
    { icon: '✨', label: 'Abstract' },
    { icon: '🖼️', label: 'Screen Block' },
  ];

  fabricCategories = [
    { title: 'Floral', img: 'assets/FabricBackGround/fabric11.jpg' },
    { title: 'Geometric', img: 'assets/FabricBackGround/fabric22.jpg' },
    { title: 'Bandhej', img: 'assets/FabricBackGround/fabric33.jpg' },
    { title: 'Patola', img: 'assets/FabricBackGround/fabric44.jpg' },
    { title: 'Shibori', img: 'assets/FabricBackGround/fabric55.jpg' },
    { title: 'Texture', img: 'assets/FabricBackGround/fabric66.jpg' },
    { title: 'Abstract', img: 'assets/FabricBackGround/fabric77.jpg' },
    { title: 'Screen Block', img: 'assets/FabricBackGround/fabric88.jpg' },
  ];
}
