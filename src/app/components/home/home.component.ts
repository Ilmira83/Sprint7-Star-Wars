import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLinkActive, RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
})
export class HomeComponent  {

}
