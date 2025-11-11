import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) {
    }
    getCochesHttpClient(): Observable<any> {
        let request = environment.urlCoches + "webresources/coches"
        return this._http.get(request);
    }
    getCoches(): Promise<any> {
        let request = environment.urlCoches + "webresources/coches"
        let promise = new Promise((resolve)=>{
            fetch(request).then(response => {
            resolve(response.json())
            })
        })
        return promise;
    }
}