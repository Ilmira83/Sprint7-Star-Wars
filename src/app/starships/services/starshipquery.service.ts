import { Injectable, signal } from '@angular/core';
interface Starships{
  name:string,
  model:string
  manufacture:string
}
@Injectable({
  providedIn: 'root'
})

export class StarshipqueryService {
  
  starshipsList = signal<Starships[]>([]);
  currentURL = 'https://swapi.dev/api/starships'
  nextPageLoading:boolean = false

  constructor() {}

 async getStarshipsList() : Promise<void> {

  if(this.nextPageLoading) return;

    try {
      this.nextPageLoading = true;

      const response = await fetch(this.currentURL,  { headers: { 'Accept': 'application/json' } }) 
        if (!response.ok) {
          throw new Error('Response was not received')
        }
      const data = await response.json()
      this.starshipsList.set([...this.starshipsList(), ...data.results]);//ПОСМОТРЕТЬ КАК РАЗНЕСТИ ПО МАЛЕНЬКИМ ФУНКЦИЯМ
      this.currentURL = data.next
      this.nextPageLoading = false
    }
    catch (error) {
      console.error('Error fetching ships:', error)
    }}

    loadNextPages(){
      if (this.currentURL && !this.nextPageLoading) {
        this.getStarshipsList();
      }
    }


  


}
