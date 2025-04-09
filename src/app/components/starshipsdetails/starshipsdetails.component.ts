import { Component, effect, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipqueryService } from '../../services/starshipquery.service';
import { PilotsService } from '../../services/pilots.service';
import { FilmService } from '../../services/film.service';



@Component({
  selector: 'app-starshipsdetails',
  imports: [CommonModule],
  templateUrl: './starshipsdetails.component.html',
  styleUrl: './starshipsdetails.component.css'
})
export class StarshipsdetailsComponent implements OnInit {

 @Input({ required: true,
    transform: (val:string) => Number(val)}) shipID!: number;

  starShipService = inject(StarshipqueryService)
  starShip = this.starShipService.starShip
  pilotsService = inject(PilotsService)
  filmsService = inject(FilmService)
  pilots = this.pilotsService.pilots
  films = this.filmsService.films

  constructor(){
    
    effect(()=>{
      this.pilots.set([]);
      this.films.set([]);
      this.pilotsService.getPilots();
      this.filmsService.getFilm()
    }
  )
  }

  ngOnInit(): void {
    this.starShipService.getShipByID(this.shipID)
  }



}


