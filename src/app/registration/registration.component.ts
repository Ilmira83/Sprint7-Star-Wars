import { Component } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
