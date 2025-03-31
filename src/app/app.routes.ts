import { Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';


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
    },
    canActivate: [LoginGuard],
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
      return m.RegistrationComponent;
     },
  },
  { path:'**',
    redirectTo: 'app-home'
  }


];
