import { inject, Injectable, signal } from '@angular/core';
import { Ship } from '../models/Ship.interface';
import { HttpClient } from '@angular/common/http';

export interface ShipsResponse{
  count: number,
  next: string,
  previous: string,
  results: Ship[]
}

@Injectable({
  providedIn: 'root'
})

export class StarshipqueryService {
  starshipsList = signal<Ship[] | undefined>(undefined)
  starShip = signal<Ship | null>(null);
  shipsURL = 'https://swapi.dev/api/starships'
  shipIDURL = 'https://swapi.dev/api/starships/'
  nextPageLoading:boolean = false
  http = inject(HttpClient)
  
  getStarshipsList(){
    this.nextPageLoading = true;
    this.http.get<ShipsResponse>(this.shipsURL).subscribe(response => {
      this.starshipsList.update(v=> [...v??[], ...response.results]);
      this.shipsURL = response.next;
      this.nextPageLoading = false;
    });;
  }

  loadNextPages=()=>{
    if (this.shipsURL && !this.nextPageLoading) {
      this.getStarshipsList();
    }
  }


  getShipByID=(id:number) =>{
    if(!id){
      console.warn(`ID not found`)
      return;
    }
    return this.http.get<Ship>(`${this.shipIDURL}/${id}/`).subscribe((ship) => {this.starShip.set(ship)});
  }
     
    

}

