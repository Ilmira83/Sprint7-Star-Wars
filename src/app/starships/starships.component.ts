import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StarshipqueryService } from '../services/starshipquery.service';

@Component({
  selector: 'app-starships',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css',
})
export class StarshipsComponent implements OnInit{
 
  starShipService = inject(StarshipqueryService)
  starshipsList = this.starShipService.starshipsList
  
  ngOnInit() {
    this.starShipService.getStarshipsList()
  } 
   
  nexPage=() => this.starShipService.loadNextPages();

  getShipID=(index:number)=>{
    if(this.starshipsList()!.length === 0){
      return console.warn('Ship list is empty')
    }
    const shipID = this.starshipsList()![index].url.split('/').slice(-2, -1)[0]
    return shipID
  };
     
}
 

