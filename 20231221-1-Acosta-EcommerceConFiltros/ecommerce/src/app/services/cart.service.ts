import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private cartTotal: number = 0;
  private cartCount: number = 0;

  constructor() {}

  public getCartItems(): any[] {
    return this.cartItems;
  }

  public getCartTotal(): number {
    return this.cartTotal;
  }

  public getCartCount(): Observable<number> {
    return of(this.cartCount);
  }

  public addItem(product: any): void {
    const existingProduct = this.cartItems.find(
      (p: any) => p.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity++;
      this.cartTotal += existingProduct.price;

    } else {
      product.quantity = 1;
      this.cartItems.push(product);
      this.cartTotal += product.price;
    }

    this.cartCount += 1;

    console.log('Sumando cantidad:',this.cartCount)
  }

  public removeItem(product: any): void {
    const index = this.cartItems.indexOf(product);

    if (index !== -1) {
      this.cartTotal -= product.price * product.quantity;
      this.cartItems.splice(index, 1);

      this.cartCount -= product.quantity;

      console.log('Restando cantidad:',this.cartCount)
    }
  }

  public clearCart(): void {
    this.cartItems = [];
    this.cartTotal = 0;
    this.cartCount = 0;
  }
}
