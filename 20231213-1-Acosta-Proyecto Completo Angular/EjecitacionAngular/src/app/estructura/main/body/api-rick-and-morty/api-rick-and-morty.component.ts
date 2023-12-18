import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../../../Service/service-api.service';

@Component({
  selector: 'app-api-rick-and-morty',
  templateUrl: './api-rick-and-morty.component.html',
  styleUrl: './api-rick-and-morty.component.css',
})
export class ApiRickAndMortyComponent implements OnInit {
  personajes: any = [];
/*   mostrarTabla: boolean = true;
  personaje: any = {}; */

  constructor(private miServicio: ServiceApiService) {
  }

  ngOnInit(): void {
    this.personajes = this.miServicio.getDataAPI().subscribe((data) => {
      console.log(data);

      this.personajes = data;
    });
  }

 /*  VerPersonaje(index: number) {
    const idPersonaje = this.personajes.results[index].id;
    this.miServicio.getPersonajeAPI(idPersonaje).subscribe((personajesTodo) => {
      console.log(personajesTodo);
      this.personaje = personajesTodo;
  this.mostrarTabla = false; 
    });
  }

 volverATabla() {
    this.mostrarTabla = true;
    this.personaje = {};
  }  */
}
