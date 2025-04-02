import { inject, Injectable, signal } from '@angular/core';
import { Films, FilmsResponse } from '../interface/films';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  filmsList = signal<Films[] | undefined>(undefined);
  film = signal<Films | undefined>(undefined);
  filmsURL = 'https://swapi.dev/api/films/';
  http = inject(HttpClient)

  getFilm(){
      this.http.get<FilmsResponse>(this.filmsURL).subscribe(r => {
        this.filmsList.update(v=> [...v??[], ...r.results])
        console.log(this.filmsList())
      });
      
  }

}
