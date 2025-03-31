import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkRk8lF1hFz5ndiSfjD8ghMowNIHuCt2g",
  authDomain: "starwars-ilmira.firebaseapp.com",
  projectId: "starwars-ilmira",
  storageBucket: "starwars-ilmira.firebasestorage.app",
  messagingSenderId: "811304984913",
  appId: "1:811304984913:web:178af3511db6a294353370"
};


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  private _app = initializeApp(firebaseConfig);
  get app(){
    return this._app;
  }
   private _auth = getAuth(this._app);
  get auth(){
    return this._auth;
  }
 /* private _db = getFirestore(this._app)
  get db(){
    return this._db;
  } */
}




