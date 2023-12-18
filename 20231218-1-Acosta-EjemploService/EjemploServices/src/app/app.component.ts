import { Component, OnInit } from '@angular/core';
import { EjemploServicioService } from './Service/ejemplo-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'EjemploServices';

  // ------------ IMPLEMENTACION DE SERVICIOS -------------------------------

  datos: any = [];

  personajes: any = [];

  constructor(public miServicio: EjemploServicioService) {
    this.miServicio;
  }

  ngOnInit(): void {
    //llamamos al metodo "getDatos()" del servicio
    this.datos = this.miServicio.getDatos();

    this.personajes = this.miServicio.getDataAPI().subscribe((data) => {
      console.log(data);

      this.personajes = data;
    });
  }
}
