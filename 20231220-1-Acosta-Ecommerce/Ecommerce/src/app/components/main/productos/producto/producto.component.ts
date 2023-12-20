import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../../service/producto.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../../../../service/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  product!: any;
  productId: number = -1;
  img: number = 0;
  mensajeAlerta: string = '';

  constructor(
    public productoService: ProductoService,
    public router: ActivatedRoute,
    public carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.productId = parseInt(this.router.snapshot.params['id']);
    this.productoService.getProduct(this.productId).subscribe((res) => {
      this.product = res;
    });
  }

  addCompra() {
    this.carritoService.addCarrito(this.product);

    this.mensajeAlerta = 'Se agrego al carrito correctamente';

    setTimeout(() => {
      this.mensajeAlerta = '';
    }, 2000);
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
  cambiarImg(num: any) {
    let aux;
    switch (num) {
      case 1:
        aux = this.product.images[0];
        this.product.images[0] = this.product.images[1];
        this.product.images[1] = aux;
        break;
      case 2:
        aux = this.product.images[0];
        this.product.images[0] = this.product.images[2];
        this.product.images[2] = aux;
        break;
    }
  }
}
