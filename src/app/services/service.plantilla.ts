import { environment } from "../../environments/environment.development";
import { Plantilla } from "../models/plantilla";

export class ServicePlantilla{
    // "idEmpleado": 0,
    // "idHospital": 0,
    // "idSala": 0,
    // "apellido": "string",
    // "funcion": "string",
    // "turno": "string",
    // "salario": 0
    async getPlantillaPorFuncion(funcion: string):Promise<Array<Plantilla>>{
        let request = environment.urlPlantilla + "api/Plantilla/PlantillaFuncion/" + funcion
        return fetch(request).then(response => response.json())
    }
    async getPlantillaFunciones():Promise<Array<string>>{
        let request = environment.urlPlantilla + "api/Plantilla/Funciones"
        return fetch(request).then(response => response.json())
    }
}