import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmService } from '../services/film.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
})
export class HomeComponent implements OnInit {
  filmService = inject(FilmService)

  ngOnInit(): void {
    this.filmService.getFilm()

  }


}
