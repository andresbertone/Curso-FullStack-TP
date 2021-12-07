import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './../models/product-model';
import { ObjResponseArray } from '../models/objResponseArray';
import { ObjResponse } from '../models/objResponse';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = `http://localhost:3000`;

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ObjResponseArray>(`${ this.baseUrl }/products`).pipe(
      map( res => res.data )
    );
  };

  getProduct( idProduct: string | null ): Observable<ProductModel> {
    return this.http.get<ObjResponse>(`${ this.baseUrl }/products/${ idProduct }`).pipe(
      map( res => res.data )
    );
  };
  
  searchProducts( text: string | null ): Observable<ProductModel[]> {
    return this.http.get<ObjResponseArray>(`${ this.baseUrl }/products?name=${ text }`).pipe(
      map( res => res.data )
    );
  };

}
