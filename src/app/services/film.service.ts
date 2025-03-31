import { inject, Injectable, signal } from '@angular/core';
import { filmByID, Films, FilmsResponse } from '../interface/films';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  filmsList = signal<Films[] | undefined>(undefined);
  film = signal<Films | undefined>(undefined);
  filmsURL = 'https://swapi.dev/api/films/';
  filmIDURL = 'https://swapi.dev/api/films/';
  http = inject(HttpClient)

  filmByID: filmByID[] = [
    { id: 1,
      image: 'assets/home1.jpeg'
    },
    { id: 2,
      image: 'assets/home2.jpeg'
    },
    { id: 3,
      image: 'assets/home3.jpeg'
    },
  ]


  getFilm(){
      this.http.get<FilmsResponse>(this.filmsURL).subscribe(r => {
        this.filmsList.update(v=> [...v??[], ...r.results])
      });
      
  }

 /*  getFilmByID=(id:number) =>{
    const episodeID = Number(this.film()?.episode_id)
    this.filmByID.map(item => {if(item.id == episodeID){
      this.filmByID.push(this.filmsList()?.title)
    }
  }) */
/* 
      if(!id){
        console.warn(`ID not found`)
        return;
      }
      return this.http.get<Films>(`${this.filmIDURL}/${id}/`).subscribe((f) => {this.film.set(f)
        console.log(this.film())
      });
  }
  showFilmByID(){
    this.filmByID.map(item => {this.getFilmByID(item.id)
      console.log(this.film())
    }
  )
    
  }
 */
}
