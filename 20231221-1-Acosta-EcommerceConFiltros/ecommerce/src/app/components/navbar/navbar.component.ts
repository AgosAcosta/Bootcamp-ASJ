import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  categories: any = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
