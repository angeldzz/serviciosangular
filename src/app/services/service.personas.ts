import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersona{
    // para poder realizar peticiones necesitamos el objeto HttpClient
    // dicho objeto debemos inyectarlo en las clases que utilicemos con apis
    constructor(private _http: HttpClient) {}
    getPersonas():Observable<any> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/"
        let request = "api/personas"
        return this._http.get(urlApi + request)
    }
    getPersonasPromise(): Promise<any>{
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/"
        let request = "api/personas"
        let promise = new Promise((resolve)=>{
            this._http.get(urlApi + request).subscribe(response => {
                resolve(response)
            })
        })
        return promise
    }
}