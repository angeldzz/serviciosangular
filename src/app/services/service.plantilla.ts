import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Plantilla } from "../models/plantilla";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ServicePlantilla{
    // "idEmpleado": 0,
    // "idHospital": 0,
    // "idSala": 0,
    // "apellido": "string",
    // "funcion": "string",
    // "turno": "string",
    // "salario": 0
    constructor(private _http: HttpClient) {
    }
    getEmpleadosFunciones(funciones: Array<string>): Observable<Array<Plantilla>>{
        let datos = "";
        for(let funcion of funciones){
            datos += `funcion=${funcion}&`
        }
        //Eliminamos el ultimo caracter
        datos.substring(0,datos.length - 1)
        let request = "api/Plantilla/PlantillaFunciones?" + datos
        let url = environment.urlPlantilla + request
        return this._http.get<Array<Plantilla>>(url)
    }
    async getPlantillaPorFuncion(funcion: string):Promise<Array<Plantilla>>{
        let request = environment.urlPlantilla + "api/Plantilla/PlantillaFuncion/" + funcion
        return fetch(request).then(response => response.json())
    }
    async getPlantillaFunciones():Promise<Array<string>>{
        let request = environment.urlPlantilla + "api/Plantilla/Funciones"
        return fetch(request).then(response => response.json())
    }
    // La Forma de hacerlo con Diamods ---.get<string>()---
    // constructor(private _http: HttpClient) {
    // }
    // getPlantillasObservable(): Observable<Array<string>>{
    //     return this._http.get<Array<string>>(environment.urlPlantilla + "api/Plantilla/Funciones")
    // }
}