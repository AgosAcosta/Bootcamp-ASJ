import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceApiService } from '../../../../../Service/service-api.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent implements OnInit {

  personaje!: any;
  personajeId: number = -1;

  constructor(private route: ActivatedRoute, private miServicio: ServiceApiService){

  }

  ngOnInit(): void {
    this.personajeId = parseInt(this.route.snapshot.params["id"]);
    this.miServicio.getPersonajeAPI(this.personajeId).subscribe((data)=>{
      this.personaje=data;
    })
  }
 

}
