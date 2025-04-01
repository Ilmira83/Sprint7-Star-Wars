import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr} from 'ngx-toastr'
import { provideAnimations} from '@angular/platform-browser/animations'
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
              provideAnimations(),
              provideToastr({timeOut: 1500, preventDuplicates: true }),
              provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes, withComponentInputBinding()),
              provideHttpClient(),
             
             ]
};
