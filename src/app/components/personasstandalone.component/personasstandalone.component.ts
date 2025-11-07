import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { CommonModule } from '@angular/common';
import { ServicePersona } from '../../services/service.personas';

@Component({
  selector: 'app-personasstandalone',
  standalone: true,
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  imports: [CommonModule],
  providers: [ServicePersona]
})
export class PersonasstandaloneComponent implements OnInit{
  public personas!: Array<Persona>;
  constructor(private _service: ServicePersona) {}
    
  ngOnInit() {
      this._service.getPersonasPromise().then(response => {
        this.personas = response
      })
  }
}
