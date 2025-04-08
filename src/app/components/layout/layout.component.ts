import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  authService = inject(AuthService);
  searchInputActive: boolean = false;


  showInput() {
    this.searchInputActive = true;
  }
 
  hideInput() {
    this.searchInputActive = false;
  }
}
