import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "./country";
import { envComponent } from "./env/env.component";


@Injectable({
    providedIn :"root"
})
export class APIService{

    constructor(
        private readonly http:HttpClient
    ){

    }
    handlegetCountry(){
      const url = `${envComponent.baseUrl}`;
      return this.http.get<Country[]>(url);
    }

    // getCountry(name:string):Observable<any>{
    //     return this.http.get('${this.url}/users/search?q=${name}')
}