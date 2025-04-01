import { inject, Injectable, signal } from "@angular/core";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";
import { UserInterface } from "../interface/user";
import { FirebaseService } from "../shared/services/firebase.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  firebaseService = inject(FirebaseService);
  user = signal<UserInterface | null>(null);
  loggedIn = signal<boolean>(false);
  newReg = signal<boolean>(false);
  router = inject(Router)
  toastrservice = inject(ToastrService);

  openRegRofm(){
    this.newReg.set(true);
  }
  
  register(email:string, password:string, username:string){
    if(!email || !password || !username){
      this.toastrservice.warning('Please, enter Email, password and Username!')
      console.error('Enter Email, password and Username!');
      return;
    }
    return createUserWithEmailAndPassword(this.firebaseService.auth, email, password)
  }
 
  logIn(email:string, password:string) {
    return signInWithEmailAndPassword(this.firebaseService.auth, email, password)
  }

  async logOut(){
    try {
      signOut(this.firebaseService.auth);
          this.loggedIn.set(false);
    localStorage.clear();
    this.router.navigate(['/app-home']);
    this.toastrservice.info('You are loged out.', 'Info')
    } catch(error) {
      if (error instanceof Error) {
        console.error('Logout failed:', error.message);
      } else {
        console.error('Logout failed:', error);
      }
    }

     
  }
  
}


