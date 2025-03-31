import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipqueryService } from '../../services/starshipquery.service';
import { Ships } from '../../interface/ships';



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

  
  ngOnInit(): void {
    this.starShipService.getShipByID(this.shipID)
  }


}


