import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersona{
    // para poder realizar peticiones necesitamos el objeto HttpClient
    // dicho objeto debemos inyectarlo en las clases que utilicemos con apis
    constructor(private _http: HttpClient) {}
    getPersonas():Observable<any> {
        let urlApi = environment.urlApi
        let request = urlApi + "api/personas"
        return this._http.get(request)
    }
    getPersonasPromise(): Promise<any>{
        let urlApi = Global.urlApi
        let request = urlApi + "api/personas"
        let promise = new Promise((resolve)=>{
            this._http.get(request).subscribe(response => {
                resolve(response)
            })
        })
        return promise
    }
}