import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarshipsComponent } from "./starships/starships.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StarshipsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Star_Wars';
}
