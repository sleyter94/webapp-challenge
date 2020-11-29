import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public clients: Observable<Client[]>;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
  }

}
