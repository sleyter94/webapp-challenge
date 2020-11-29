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
      cs => {
        this.mean = cs.length ? _.meanBy(cs, (c) => c.age) : 0;
        this.std = Math.sqrt(_.sumBy(cs, (c) => (Math.abs(c.age - this.mean))/cs.length));
      }
    );

  }

}
