import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName= 'Users';

  constructor(private afs: AngularFirestore) { }

  create(user: User){
    this.afs.collection<User>(this.collectionName).doc(user.email).set(user);
  }

  getAll(){
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }

  getById(email: string){
    return this.afs.collection<User>(this.collectionName).doc(email).valueChanges();

  }

  update(user: User){
    this.afs.collection<User>(this.collectionName).doc(user.email).set(user);
  }

  delete(email: string){
    return this.afs.collection<User>(this.collectionName).doc(email).delete;
  }
}
