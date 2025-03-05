import { Component, effect, HostListener, inject, OnInit } from '@angular/core';
import { StarshipqueryService } from './services/starshipquery.service';

@Component({
  selector: 'app-starships',
  imports: [],
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
