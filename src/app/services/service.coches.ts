import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { Coche } from "../models/coche";

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) {
    }
    // Esta opcion es buena pero hay que escribir mucho codigo y es complejo
    getCochesHttpClient(): Observable<Array<Coche>> {
        let request = environment.urlCoches + "webresources/coches"
        let coches: Observable<Array<Coche>> = this._http.get<Array<Coche>>(request)
        return coches;
    }
    // Esta es la opcion mas rapida y tipada
    async getCoches(): Promise<Array<Coche>> {
        let request = environment.urlCoches + "webresources/coches"
        // Extraer los datos tenemos que seguir haciendolo
        // la diferencia esta en la sintaxis
        return await fetch(request).then(response => response.json());
    }
}
