import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route when localhost :4200 is opened it will redirect to home compoenent
];
