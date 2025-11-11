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
    async getPlantillaPorFuncion(funciones: Array<string>):Promise<Array<Plantilla>>{
        let promises: Array<Promise<Array<Plantilla>>> = [];
        for(let funcion of funciones){
            let request = environment.urlPlantilla + "api/Plantilla/PlantillaFuncion/" + funcion
            promises.push(fetch(request).then(response => response.json())) 
        }
        let results = await Promise.all(promises);
        return results.flat();
    }
    async getPlantillaFunciones():Promise<Array<string>>{
        let request = environment.urlPlantilla + "api/Plantilla/Funciones"
        return fetch(request).then(response => response.json())
    }
}