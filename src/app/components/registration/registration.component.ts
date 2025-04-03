import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../authentication/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { UserInterface } from '../../models/User.interface';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  imports: [ ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
  authService = inject(AuthService);
  localStorageService = inject(LocalStorageService)
  router = inject(Router)
  form: FormGroup;
  user = signal<UserInterface | null>(null);
  toastrservice = inject(ToastrService);

  @ViewChild('myModal') modal: ElementRef | undefined;
 

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[0-9]+$/)]),
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
      this.authService.newReg.set(false);
      this.saveUSer();
      this.form.reset();
      this.toastrservice.info('You are registered now.', 'Info', {closeButton: true});
    })
    .catch(() => {
      this.toastrservice.error('Registration mistake: This e-mail already in use.','Error', {closeButton: true});
    });
  }

  logIn(){
    this.authService.logIn(this.form.value.email, this.form.value.password)
    .then(() => {
      this.toastrservice.success('You are loged in.', 'Success', {closeButton: true});
      this.authService.loggedIn.set(true);
      this.closeLoginForm();
    })
    .catch(()=> this.toastrservice.error('Log in failed: invalid e-mail or password.', 'Error', {closeButton: true}));
    
  }

  closeLoginForm(){
    this.form.reset()
    this.navigateHome()
  }

  navigateHome=()=> this.router.navigate(['/app-home']);
  
}

