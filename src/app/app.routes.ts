import { Routes } from '@angular/router';
import { LoginGuard } from './authentication/guards/login.guard';
import { LayoutComponent } from './components/layout/layout.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'app-home', // child route path
        pathMatch: 'full',
        loadComponent: async () => {
          const m = await import('./components/home/home.component');
          return m.HomeComponent
        }, 
      },
      {
        path: 'app-starships',
        pathMatch: 'full',
        loadComponent: async () => {
          const m = await import('./components/starships/starships.component');
          return m.StarshipsComponent
        },
        canActivate: [LoginGuard], 
      },
      {
        path: 'starships/:shipID',
        loadComponent: async () => {
          const m = await import('./components/starshipsdetails/starshipsdetails.component');
          return m.StarshipsdetailsComponent
        } 
      },
    ],
  },
/*   { path: 'app-home',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./components/home/home.component');
      return m.HomeComponent
    },
  }, */
/*   { path: 'app-starships', 
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./components/starships/starships.component');
      return m.StarshipsComponent
    },
    canActivate: [LoginGuard],
  }, */
/*   { path: 'starships/:shipID',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./components/starshipsdetails/starshipsdetails.component');
      return m.StarshipsdetailsComponent
    }  
  }, */
  { path: 'app-registration',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./components/registration/registration.component');
      return m.RegistrationComponent;
     }
   
  },
/*   { path:'**',
    redirectTo: 'app-home'
  } */


];
