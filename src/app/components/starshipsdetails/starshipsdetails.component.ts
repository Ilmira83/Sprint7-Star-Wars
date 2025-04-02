import { Component, effect, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipqueryService } from '../../services/starshipquery.service';
import { Ships } from '../../interface/ships';
import { PilotsService } from '../../services/pilots.service';



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
  pilot = this.pilotsService.pilot

  constructor(){
    
    effect(()=>{this.pilot.set([]);
      this.pilotsService.getPilots()}
  )
  console.log(this.pilot()) 
  }

  ngOnInit(): void {
    this.starShipService.getShipByID(this.shipID)
  }



}


