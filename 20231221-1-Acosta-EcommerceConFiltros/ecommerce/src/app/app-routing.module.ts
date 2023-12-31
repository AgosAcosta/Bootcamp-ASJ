import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/main/cart/cart.component';
import { ProductComponent } from './components/main/product/product.component';
import { ProductsComponent } from './components/main/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {
    path: ':productName/:productPrice/:minPrice/:maxPrice/:categoryId',
    component: ProductsComponent,
  },
  { path: 'products/:productId', component: ProductComponent },
  { path: 'categories/:categoryId', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
