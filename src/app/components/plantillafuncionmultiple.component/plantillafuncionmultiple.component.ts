import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantillafuncionmultiple',
  standalone: false,
  templateUrl: './plantillafuncionmultiple.component.html',
  styleUrl: './plantillafuncionmultiple.component.css',
})
export class PlantillafuncionmultipleComponent implements OnInit{
  constructor(private _service: ServicePlantilla) {
  }
    @ViewChild("selectFuncion") selectFuncion!:ElementRef;
    public plantilla!: Array<Plantilla>;
    public funciones!: Array<string>;
    ngOnInit(): void {
        this._service.getPlantillaFunciones().then(response => {
          this.funciones = response
        })
    }
    BuscarEmpleados():void{
      console.log(this.selectFuncion.nativeElement.options);
      let aux = new Array<string>();
      for(let opt of this.selectFuncion.nativeElement.options){
        if(opt.selected){
          aux.push(opt.value) 
        }
      }
      this._service.getEmpleadosFunciones(aux).subscribe(response => {
            this.plantilla = response;
        })
    }
}
