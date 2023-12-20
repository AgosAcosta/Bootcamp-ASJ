import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../service/producto.service';
import { CategoriaService } from '../../../service/categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  constructor(
    public productoService: ProductoService,
    public categoriaService: CategoriaService,
    public router: ActivatedRoute
  ) {}

  productsList: any = [];

  categoryId: number = -1;

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    //  this.categoryId = parseInt(this.router.snapshot.params['id']);
    this.router.paramMap.subscribe((param: any) => {
      this.categoryId = parseInt(param.get('id'));

      if (this.categoryId) {
        this.categoriaService.getCategory(this.categoryId).subscribe((res) => {
          this.productsList = res;
        });
      } else {
        this.productoService.getProducts().subscribe((res) => {
          this.productsList = res;
        });
      }
    });
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
}
