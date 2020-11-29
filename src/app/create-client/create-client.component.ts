import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  createForm: FormGroup;
  client: Client = new Client();
  nameRegex =  /[A-zÀ-ú\s]+/;
  numberRegex = /[0-9\s]/;
  constructor(private formBuilder: FormBuilder,
              private clientService: ClientService,
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      lastname: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      bornDate: [null, []],
      age: [0, [Validators.required, Validators.pattern(this.numberRegex)]]
    });
  }

  createClient() {
    console.log(this.createForm.value);
    if (this.createForm.valid) {
      this.getClient();
      this.clientService.createClient(this.client);
      this._snackBar.open('Cliente creado', 'OK', {
        duration: 2000
      })
      this.router.navigate(['']);
    } else {
      alert('Hay un error en los datos ingresados');
    }
  }

  getClient(): void {
    this.client.age = this.createForm.value.age;
    this.client.bornDate = this.createForm.value.bornDate.toISOString();
    this.client.firstname = this.createForm.value.firstname;
    this.client.lastname = this.createForm.value.lastname;
    const ESPERANZA_VIDA_MUJER = 79.2;
    const ESPERANZA_VIDA_HOMBRE = 73.7;
    const years = ESPERANZA_VIDA_HOMBRE + Math.random() * (ESPERANZA_VIDA_MUJER - ESPERANZA_VIDA_HOMBRE)
     + this.createForm.value.bornDate.getFullYear();
    this.createForm.value.bornDate.setFullYear(Math.round(years));
    this.createForm.value.bornDate.setMonth(Math.round(1 + 11 * Math.random()));
    this.createForm.value.bornDate.setDate(Math.round(1 + 30 * Math.random()));
    this.client.deathDate = this.createForm.value.bornDate.toISOString();
  }

}
