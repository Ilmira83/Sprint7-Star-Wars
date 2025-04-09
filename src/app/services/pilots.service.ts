import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { StarshipqueryService } from './starshipquery.service';
import { forkJoin } from 'rxjs';

export interface PilotsResponse {
  results: Pilots[];
}
export interface Pilots {
  name: string;
  url: string;
}
@Injectable({
  providedIn: 'root',
})

export class PilotsService {
  starshipService = inject(StarshipqueryService);
  starShipSelected = this.starshipService.starShip;
  pilots = signal<Pilots[] | undefined> ([]);
  http = inject(HttpClient);

  getPilots() {
    this.pilots.set([]);
    const pilotsUrls = this.starShipSelected()?.pilots;
    if(pilotsUrls?.length) {
      forkJoin(pilotsUrls.map(url => this.http.get<Pilots>(url))).subscribe({
        next: (response: Pilots[]) => {
          this.pilots.set(response);
      },
      error: (err: any) => console.error('Error fetching pilots:', err)
      })
    } else {
      this.pilots.set([])
    }
  }

}
