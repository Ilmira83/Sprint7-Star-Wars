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
  status = signal('')

/*   constructor(){
     onAuthStateChanged(this.firebaseService.auth, async (authUser) => {
      if(!authUser){
        this.user.set(null);
        return;
      }else{
        const user = await this.getUserInfo(authUser.uid!)
        this.user.set(user);
      }
    }) 
  }
 */
/*   async getUserInfo(uid:string): Promise < UserInterface  | null> {
    const userRef = doc(this.firebaseService.db, 'users', uid)
    const userDoc = await getDoc(userRef)
    if(!userDoc.exists()) {
      return null;
    }else {
      return userDoc.data() as UserInterface;
    }
  } */
/*   async setUserInfo(newUserData: UserInterface): Promise<void>{
    try {
      const auth = getAuth(); 
      const newUser = auth.currentUser; 
      if (newUser) {
        const userRef = doc(this.firebaseService.db, "users", newUser.uid); 
        await setDoc(userRef, newUserData); 
        console.log("UserData saved.");
      } else {
        console.error("User was not authenticated.");
      }
    } catch (error) {
      console.error("Data save error:", error);
    }
  } */
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
    
    //delete info from local storage
    //localStorage methods get, set , remove
    
  }
  
}


