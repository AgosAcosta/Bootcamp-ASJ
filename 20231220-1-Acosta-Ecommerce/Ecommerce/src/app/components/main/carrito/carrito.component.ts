import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  carritoList: any = [];
  mensajeAlerta: string = '';

  constructor(public carritoService: CarritoService) {}

  ngOnInit(): void {
    this.listCarrito();
  }

  listCarrito() {
    this.carritoList = this.carritoService.getCarrito();
  }
  delete(product: any) {
    const confirmacion = confirm('Desea eliminar este producto?');
    if (confirmacion) {
      this.carritoService.deleteProduct(product);
      this.listCarrito();
    }
  }

  getTotal() {
    return this.carritoService.getTotal();
  }

  comprar() {
    const confirmacion = confirm('Desea realizar esta compra?');
    if (confirmacion) {
      this.mensajeAlerta = 'Se realizo la compra correctamente';

      setTimeout(() => {
        this.mensajeAlerta = '';
      }, 2000);

      this.carritoService.resetCarrito();
    }
  }
  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
}
