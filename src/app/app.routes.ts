import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FabricComponent } from './components/fabric/fabric.component';
import { garmentsComponent } from './components/garments/garments.component';
import { lausComponent } from './components/laus/laus.component';
// import { MenFabricComponent } from './components/men-fabric/men-fabric.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fabric', component: FabricComponent },
  { path: 'garments', component: garmentsComponent },
  { path: 'laus', component: lausComponent },
  // { path: 'mensFabric', component: MenFabricComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
