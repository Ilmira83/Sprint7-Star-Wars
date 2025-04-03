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
  pilot = this.pilotsService.pilot
  film = this.filmsService.film

  constructor(){
    
    effect(()=>{this.pilot.set([]);
      this.film.set([]);
      this.pilotsService.getPilots();
      this.filmsService.getFilm()
    }
  )
  }

  ngOnInit(): void {
    this.starShipService.getShipByID(this.shipID)
  }



}


