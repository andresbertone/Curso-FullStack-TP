import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../../../shared/models/product-model';
import { ObjResponseArray } from '../../../shared/models/objResponseArray';
import { ObjResponse } from '../../../shared/models/objResponse';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductService {

  baseUrl: string = environment.baseUrl;
  initialProducts!: BehaviorSubject<ProductModel[]>; //Linea agregada
  products!: Observable<ProductModel[]> // Linea agregada

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
  
  filterProducts( text: string | null ): Observable<ProductModel[]> {
    return this.http.get<ObjResponseArray>(`${ this.baseUrl }/products?name=${ text }`).pipe(
      map( res => res.data )
    );
  };

}
