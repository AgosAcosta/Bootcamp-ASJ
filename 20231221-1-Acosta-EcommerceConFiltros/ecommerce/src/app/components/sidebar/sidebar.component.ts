import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  minPrice: number = 0;
  maxPrice: number = 0;
  price: number = 0;
  productName: string = '';

  categories: any = [];
  categoryId: number = 0;
  categoryName: string = '';

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
  selectCategory(categoryId: any, categoryName: any) {
    this.categoryId = parseInt(categoryId);
    this.categoryName = categoryName;

    console.log('Categoria:', categoryId);
    this.filter();
  }

  clearFilters() {
    this.minPrice = 0;
    this.maxPrice = 0;
    this.price = 0;
    this.productName = '';
    this.categories = [];
    this.categoryId = 0;
    this.categoryName = '';

    this.router.navigate(['']);
    this.getCategories();
  }

  filter() {
    // this.router.navigate([
    //   `/${this.productName}/${this.price}/${this.minPrice}/${this.maxPrice}`,
    // ]);

    if (this.productName === '') {
      this.router.navigate([
        `/all/${this.price}/${this.minPrice}/${this.maxPrice}/${this.categoryId}`,
      ]);
    } else {
      this.router.navigate([
        `/${this.productName}/${this.price}/${this.minPrice}/${this.maxPrice}/${this.categoryId}`,
      ]);
    }
  }
}
