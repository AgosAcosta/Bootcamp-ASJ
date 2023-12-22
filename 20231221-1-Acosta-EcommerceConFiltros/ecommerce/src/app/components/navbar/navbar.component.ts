import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  categories: any = [];
  cartItems: any =[];
  countProduct: number = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res;
    });

    this.cartItems = this.cartService.getCartItems();
    this.countProduct = this.calculateTotalQuantity();
  }

  public calculateTotalQuantity(): number {
    return this.cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
  }
}
