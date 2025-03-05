import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';

export const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'app-starships', component: StarshipsComponent }
];
