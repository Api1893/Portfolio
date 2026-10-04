import { Routes } from '@angular/router';
import { Exp } from './Experiance/exp/exp';

export const routes: Routes = [
  // Startseite: Inhalt steht direkt in app.html (über isHomePage())
  { path: '', pathMatch: 'full', children: [] },
  { path: 'experience', component: Exp },
  { path: '**', redirectTo: '' }
];
