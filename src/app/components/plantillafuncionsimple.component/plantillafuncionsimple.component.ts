import { Component, OnInit } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantillafuncionsimple',
  standalone: false,
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrl: './plantillafuncionsimple.component.css',
})
export class PlantillafuncionsimpleComponent implements OnInit {
    plantilla!: Array<Plantilla>;
    funciones!: Array<string>;
    selectEmpleados!: Array<string>;
    constructor(private _service:ServicePlantilla) {
    }
    ngOnInit(): void {
        this._service.getPlantillaFunciones().then(response => {
            this.funciones = response;
        })
    }
    BuscarEmpleados():void{
        this._service.getPlantillaPorFuncion(this.selectEmpleados).then(response => {
            this.plantilla = response;
        })
    }
}
