import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(public http: HttpClient) {}

  URL_CATEGORIA = 'https://api.escuelajs.co/api/v1/categories';

  //Los productos de la categoria
  public getCategory(id: any): Observable<any> {
    return this.http.get(this.URL_CATEGORIA + '/' + id + '/products');
  }
}
