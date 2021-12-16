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
  
  initialProducts: ProductModel[] = [];
  products$: BehaviorSubject<ProductModel[]> = new BehaviorSubject(this.initialProducts);

  constructor( private http: HttpClient ) {
    this.getProductsFromApi();
  }

  getProductsFromApi() {
    this.http.get<ObjProductResponseArray>(`${ this.baseUrl }/products`).subscribe(
      (res) => {
        this.products$.next(res.data as ProductModel[]);
        console.log('BehaviorSubject desde API', this.products$.value); // TODO: Borrar console.log
      }
    );
  };

  getProductsFromLocal(): Observable<ProductModel[]> {
    return this.products$.asObservable();
  };

  getProduct( idProduct: string ): Observable<ProductModel> {
    return this.http.get<ObjProductResponse>(`${ this.baseUrl }/products/${ idProduct }`).pipe(
      map( (res) => res.data )
    );
  };

  filterProducts( text: string ) {
    const filteredProducts = this.products$.value.filter( (product) => {
      return product.name.toLowerCase().includes( text.toLowerCase() );
    });
    console.log('Arreglo filtrado', filteredProducts); // TODO: Borrar console.log
    this.products$.next(filteredProducts);
    console.log('BehaviorSubject Actualizado',this.products$.value); // TODO: Borrar console.log
  };

  addProduct( product: ProductModel ): Observable<ProductModel> {
    return this.http.post<ObjProductResponse>(`${ this.baseUrl }/products`, product).pipe(
      map( (res) => res.data)
    );
  };

  resetProducts() {
    this.getProductsFromApi();
  };

  updateProduct( product: ProductModel ): Observable<ProductModel> {
    return this.http.put<ObjProductResponse>(`${ this.baseUrl }/products/${ product._id }`, product).pipe(
      map( (res) => res.data )
    );
  }

}
