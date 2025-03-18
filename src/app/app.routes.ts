import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipsdetailsComponent } from './starshipsdetails/starshipsdetails.component';

export const routes: Routes = [
  { path: 'app-home',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./home/home.component');
      return m.HomeComponent
    } 
  },
  { path: 'app-starships', 
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./starships/starships.component');
      return m.StarshipsComponent
    } 
  },
  { path: 'starships/:shipID',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./starshipsdetails/starshipsdetails.component');
      return m.StarshipsdetailsComponent
    }  
  },
  { path: 'app-registration',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./registration/registration.component');
      return m.RegistrationComponent
    }  
  },
  { path:'**',
    redirectTo: 'app-home'
  }


];
