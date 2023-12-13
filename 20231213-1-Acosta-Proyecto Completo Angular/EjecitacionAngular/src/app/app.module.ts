import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NarvarComponent } from './estructura/header/narvar/narvar.component';
import { MenuComponent } from './estructura/main/menu/menu.component';
import { BodyComponent } from './estructura/main/body/body.component';
import { FooterComponent } from './estructura/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NarvarComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
