import { inject, Injectable, signal } from '@angular/core';
import { Film } from '../models/Film.interface';
import { HttpClient } from '@angular/common/http';

export interface FilmsResponse{
  results: Film[]
}

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  filmsList = signal<Film[] | undefined>(undefined);
  filmsURL = 'https://swapi.dev/api/films/';
  http = inject(HttpClient)

  getFilm(){
      this.http.get<FilmsResponse>(this.filmsURL).subscribe(r => {
        this.filmsList.update(v=> [...v??[], ...r.results])
      });
      
  }

}
