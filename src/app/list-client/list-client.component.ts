import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  public clients: Client[] = [];
  public displayedColumns: string[] = ['firstname', 'lastname', 'bornDate','age','deathDate'];
  constructor() { }

  ngOnInit(): void {
    let c1 = new Client();
    c1.firstname = "Sleyter";
    c1.lastname = "Sandoval";
    c1.bornDate = new Date();
    c1.deathDate = new Date();
    c1.age = 26;
    this.clients.push(c1);
  }

}
