import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { ProductosComponent } from './components/main/productos/productos.component';
import { ProductoComponent } from './components/main/productos/producto/producto.component';
import { CategoriaComponent } from './components/main/categoria/categoria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarritoComponent } from './components/main/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    ProductoComponent,
    CategoriaComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
