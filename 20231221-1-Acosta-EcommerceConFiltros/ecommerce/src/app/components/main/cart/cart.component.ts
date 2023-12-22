import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  message: string = '';

  countProduct: number = 0;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartCount().subscribe((count: number) => {
      this.countProduct = count;
    });
    this.updateCartItems();
  }


  //Actualizacion del carrito
  updateCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  //Total del carrito
  getCartTotal() {
    return this.cartService.getCartTotal();
  }

    //Compra del carrito
  processPurchase() {
    const result = confirm('¿Desea realizar esta compra?');

    if (result) {
      this.message = '¡Se realizó la compra correctamente!';

      setTimeout(() => {
        this.message = '';
      }, 2000);

      this.cartService.clearCart();
      this.updateCartItems();
    }
  }
     //Eliminacion del carrito

  removeItem(product: any) {
    const result = confirm('¿Desea eliminar este producto?');

    if (result) {
      this.cartService.removeItem(product);
      this.updateCartItems();
    }
  }
     //Error en imagen 
  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
}
