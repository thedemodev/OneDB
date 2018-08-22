import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

