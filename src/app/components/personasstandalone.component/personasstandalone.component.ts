import { Component } from '@angular/core';
import { Persona } from '../../models/persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personasstandalone',
  standalone: true,
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  imports: [CommonModule]
})
export class PersonasstandaloneComponent {
  public personas!: Array<Persona>;
  constructor() {
    this.personas = new Array<Persona>();
    let p = new Persona(1,"A","B",22);
    let p2 = new Persona(2,"C","D",22123);
    this.personas.push(p,p2)
  }
}
