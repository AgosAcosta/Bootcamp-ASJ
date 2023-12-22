import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NarvarComponent } from './estructura/header/narvar/narvar.component';
import { MenuComponent } from './estructura/main/menu/menu.component';
import { BodyComponent } from './estructura/main/body/body.component';
import { FooterComponent } from './estructura/footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


import{ToDoListComponent} from './estructura/main/body/to-do-list/to-do-list.component'
import { FormLosSimpsonsComponent } from './estructura/main/body/form-los-simpsons/form-los-simpsons.component';
import { ApiRickAndMortyComponent } from './estructura/main/body/api-rick-and-morty/api-rick-and-morty.component';
import { PersonajeComponent } from './estructura/main/body/api-rick-and-morty/personaje/personaje.component';
import { PipeComponent } from './estructura/main/body/pipe/pipe.component';
import { PrimePipe } from './estructura/main/body/pipe/pipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NarvarComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    ToDoListComponent,
    FormLosSimpsonsComponent,
    ApiRickAndMortyComponent,
    PersonajeComponent,
    PipeComponent,
    PrimePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
