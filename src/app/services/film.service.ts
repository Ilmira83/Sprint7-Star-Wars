import { inject, Injectable, signal } from '@angular/core';
import { Film } from '../models/Film.interface';
import { HttpClient } from '@angular/common/http';
import { StarshipqueryService } from './starshipquery.service';
import { forkJoin } from 'rxjs';

export interface FilmsResponse {
  results: Film[];
}

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  starshipService = inject(StarshipqueryService);
  starShipSelected = this.starshipService.starShip;
  film = signal<Film[] | undefined>(undefined);
  http = inject(HttpClient);

  getFilm() {
    this.film.set([]);
    const filmsUrls = this.starShipSelected()?.films;
    if (filmsUrls?.length) {
      forkJoin(filmsUrls.map((url) => this.http.get<Film>(url))).subscribe({
        next: (response: Film[]) => {
          this.film.set(response);
        },
        error: (err: any) => console.error('Error fetching films:', err),
      });
    } else {
      this.film.set([]);
    }
  }
}
