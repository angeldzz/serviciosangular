import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersona } from '../../services/service.personas';

@Component({
  selector: 'app-personas-api',
  standalone: false,
  templateUrl: './personas-api-component.html',
  styleUrl: './personas-api-component.css',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;
  
  constructor(private _service: ServicePersona) {}

  ngOnInit(): void {
    this._service.getPersonas().subscribe(response => {
      console.log("Leyendo...");
      this.personas = response
    })
  }
}
