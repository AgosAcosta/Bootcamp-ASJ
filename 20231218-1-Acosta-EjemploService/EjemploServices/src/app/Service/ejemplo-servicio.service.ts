import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EjemploServicioService {
  constructor(private http: HttpClient) {
    console.log('Servicio Funcionando');
  }

  public getDatos() {
    let data = [
      { tarea: 'tarea1', terminado: true },
      { tarea: 'tarea2', terminado: false },
      { tarea: 'tarea3', terminado: true },
      { tarea: 'tarea4', terminado: false },
    ];

    return data;
  }

  public getDataAPI() {
    return this.http.get('http://rickandmortyapi.com/api/character/?page=1');
  }

  public getPersonajeAPI(id:number){
    return this.http.get('http://rickandmortyapi.com/api/character/' + id);
  }
}
