import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  URL_PRODUCT = 'https://api.escuelajs.co/api/v1/products';

  public getProducts(): Observable<any> {
    return this.http.get(this.URL_PRODUCT);
  }

  public getProduct(id:any): Observable<any> {
    return this.http.get(this.URL_PRODUCT +'/'+ id);
  }
}
