import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/main/productos/productos.component';
import { ProductoComponent } from './components/main/productos/producto/producto.component';
import { CarritoComponent } from './components/main/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'products/:id', component: ProductoComponent },
  { path: 'category/:id', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
