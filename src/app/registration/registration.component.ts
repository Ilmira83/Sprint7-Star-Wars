import { Component, ElementRef, inject, Input, input, signal, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { UserInterface } from '../interface/user';


@Component({
  selector: 'app-registration',
  imports: [ ReactiveFormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
  authService = inject(AuthService);
  localStorageService = inject(LocalStorageService)
  form: FormGroup;
  user = signal<UserInterface | null>(null);

  @Input() modalRef!: ElementRef;

  constructor(private fb: FormBuilder,
    private router: Router ){
    this.form = this.fb.group({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.min(5)]),
    username: new FormControl ('', [Validators.required]),
  });
  }
  setUserData(){
     this.user.set(
    { email: this.form.value.email,
      password: this.form.value.password,
      username:this.form.value.username }
    )
  }
  saveUSer(){
    this.setUserData()
    const isLocalPresent = this.localStorageService.getItem('starwarsS7');
    if(isLocalPresent != null) {
      const presentArr = JSON.parse(isLocalPresent);
      presentArr.push(this.user());
      this.localStorageService.setItem('starwarsS7', JSON.stringify(presentArr))
    } else {
      const newArr = [];
      newArr.push(this.user());
      this.localStorageService.setItem('starwarsS7', JSON.stringify(newArr))
    }
  }
   register(){
    this.authService.register(this.form.value.email, this.form.value.password, this.form.value.username)!
    .then(() => {
      this.router.navigate(['app-registration'])
      this.authService.newReg.set(false);
      this.saveUSer()
      this.form.reset();
    })
    .catch(() => {
      alert('Registration mistake: This e-mail already in use.');
    });
  }

  logIn(){
    this.authService.logIn(this.form.value.email, this.form.value.password)
    .then(() => {
      this.authService.loggedIn.set(true);
      this.router.navigate(['home']);
      this.closeModal()
    })
    .catch((error)=>console.error('Log in failed: invalid e-mail ', error.message));
  }

  logOut(){
    this.authService.logOut()
    .then(() => {
      this.router.navigate(['home']);
    })
    .catch((error)=>console.error('Log out failed:', error.message));
  }
  closeModal(){
    if(this.modalRef != undefined){
      this.modalRef.nativeElement.style.display = 'none';
    }
    this.router.navigate(['home']);
    this.form.reset();
  }
}

