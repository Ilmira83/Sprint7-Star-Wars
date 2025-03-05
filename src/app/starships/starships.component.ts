import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StarshipqueryService } from './services/starshipquery.service';

@Component({
  selector: 'app-starships',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css'
})
export class StarshipsComponent implements OnInit{
 
  starshipQuery = inject(StarshipqueryService)
  starshipsList = this.starshipQuery.starshipsList


 ngOnInit(): void {
    this.starshipQuery.getStarshipsList()
  }

  nexPage() {
    this.starshipQuery.loadNextPages();
  }
}
