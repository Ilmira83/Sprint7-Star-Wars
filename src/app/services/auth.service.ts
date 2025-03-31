import { inject, Injectable, signal } from "@angular/core";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithEmailLink, signOut, user } from "@angular/fire/auth";
import { from, Observable } from "rxjs";
import { UserInterface } from "../interface/user";
import { FirebaseService } from "../shared/services/firebase.service";
import { doc, getDoc, setDoc} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  firebaseService = inject(FirebaseService);
  user = signal<UserInterface | null>(null);
  loggedIn = signal<boolean>(false);
  newReg = signal<boolean>(false);


  openRegRofm(){
    this.newReg.set(true);
  }
  
  register(email:string, password:string, username:string){
    if(!email || !password || !username){
      console.error('Enter Email, password and Username!');
      return;
    }
    return createUserWithEmailAndPassword(this.firebaseService.auth, email, password)
  }
 
  logIn(email:string, password:string) {
    return signInWithEmailAndPassword(this.firebaseService.auth, email, password)
  }

  logOut(){
    this.loggedIn.set(false);
    localStorage.clear()
    return signOut(this.firebaseService.auth)
    
  
    //localStorage methods get, set , remove
    
  }
  
}


