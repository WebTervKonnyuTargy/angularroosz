import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Burger } from '../models/Burger';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class orderService {

  collectionName='Burgers';

  constructor(private http: HttpClient,private afs: AngularFirestore, private storage: AngularFireStorage) { }

  loadImageMeta(metaUrl: string): Observable<Array<Burger>> {
   return this.afs.collection<Burger>(this.collectionName).valueChanges();
  }

  loadImage(imageUrl: string) {
    return this.storage.ref(imageUrl).getDownloadURL();
  }
}
