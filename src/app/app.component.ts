import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { RegistrationComponent } from "./registration/registration.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink, CommonModule, RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  authService = inject(AuthService);
  router = inject(Router)
  searchInputActive: boolean = false;


  showInput() {
    this.searchInputActive = true;
  }
 
  hideInput() {
    this.searchInputActive = false;
  }


}

