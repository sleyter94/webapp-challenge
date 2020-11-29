import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../model/client';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary-client',
  templateUrl: './summary-client.component.html',
  styleUrls: ['./summary-client.component.css']
})
export class SummaryClientComponent implements OnInit {

  @Input() clients: Observable<Client[]>;
  mean:number = 0;
  std: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.clients.subscribe(
      (cs: Client[]) => {
        this.mean = cs.length ? _.meanBy(cs, (c: Client) => parseInt(c.age , 10)) : 0;
        this.std = Math.sqrt(_.sumBy(cs, (c) => (Math.pow(parseInt(c.age , 10) - this.mean, 2)) / cs.length));
      }
    );

  }

}
