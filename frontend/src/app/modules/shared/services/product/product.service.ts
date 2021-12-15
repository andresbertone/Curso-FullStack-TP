import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, map, Observable } from 'rxjs';

import { ProductModel } from '@app/models/product-model';
import { ObjProductResponseArray } from '@app/models/objProductResponseArray';
import { ObjProductResponse } from '@app/models/objProductResponse';

import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

  baseUrl: string = environment.baseUrl;
  initialProducts!: BehaviorSubject<ProductModel[]>; //Linea agregada
  filteredProducts!: Observable<ProductModel[]> // Linea agregada

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ObjProductResponseArray>(`${ this.baseUrl }/products`).pipe(
      map( res => res.data )
    );
  };

  getProduct( idProduct: string ): Observable<ProductModel> {
    return this.http.get<ObjProductResponse>(`${ this.baseUrl }/products/${ idProduct }`).pipe(
      map( res => res.data )
    );
  };
  
  filterProducts( text: string ): Observable<ProductModel[]> {
    return this.http.get<ObjProductResponseArray>(`${ this.baseUrl }/products?name=${ text }`).pipe(
      map( res => res.data )
    );
  };

  addProduct( product: ProductModel ) {
    return this.http.post(`${ this.baseUrl }/products`, product);
  }

}
