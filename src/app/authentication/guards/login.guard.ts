import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  authService = inject(AuthService);
  router = inject(Router);
  toastrservice = inject(ToastrService);

  canActivate():boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.toastrservice.info('Please, log in to acces the starships list.', 'Info', {closeButton: true});
      this.router.navigate(['./app-registration']);
      return false;
    }
  }
} 

