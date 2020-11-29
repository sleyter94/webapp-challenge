import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  @Input() clients: Observable<Client[]>;
  public displayedColumns: string[] = ['firstname', 'lastname', 'bornDate', 'age', 'detail'];
  constructor() { }

  ngOnInit(): void {
  }

}
