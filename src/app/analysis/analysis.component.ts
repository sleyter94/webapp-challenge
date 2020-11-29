import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../model/client';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  client: Client = new Client();
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.client.age = params.age;
      this.client.bornDate = params.bornDate;
      this.client.deathDate = params.deathDate;
      this.client.firstname = params.firstname;
      this.client.lastname = params.lastname;
  });

  }

}
