import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private firebase: AngularFireDatabase) { }

  getClients(): Observable<Client[]> {
    return this.firebase.list<Client>('clients').valueChanges();
  }

  createClient(client: Client) {
    this.firebase.list('clients').push(client);
  }
}
