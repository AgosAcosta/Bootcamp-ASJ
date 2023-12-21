import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  listCarrito: any = [];
 private total = 0;
  constructor() {}

  public getCarrito() {
    return this.listCarrito;
  }

  public addCarrito(product: any) {
    const productFind = this.listCarrito.find(
      (productoCarrito: any) => productoCarrito.id === product.id
    );
    if (productFind) {
      productFind.cantidad++;
      this.total += productFind.price;
      console.log('Sumar cantidad', this.listCarrito);
    } else {
      product.cantidad = 1;
      this.listCarrito.push(product);
      this.total += product.price;
      console.log('agregar producto', this.listCarrito);
    }
  }

  public deleteProduct(product: any) {
    const index = this.listCarrito.indexOf(product);

    if (index !== -1) {
      this.total -= product.price * product.cantidad;
      this.listCarrito.splice(index, 1);
    }
  }

  public getTotal() {
    return this.total;
  }

  public resetCarrito(){
    this.listCarrito= [];
    this.total=0;
  }
}
