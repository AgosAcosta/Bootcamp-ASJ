import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http: HttpClient) { 
    console.log('Servicio Funcionando');
  }
  public getDataAPI() {
    return this.http.get('http://rickandmortyapi.com/api/character/?page=1');
  }

  public getPersonajeAPI(id:number){
    return this.http.get('http://rickandmortyapi.com/api/character/' + id);
  }
}
