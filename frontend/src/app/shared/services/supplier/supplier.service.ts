import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { SupplierModel } from '@app/models/supplier-model';
import { ObjSupplierResponseArray } from '@app/models/objSupplierResponseArray';
import { ObjSupplierResponse } from '@app/models/objSupplierResponse';


@Injectable()
export class SupplierService {

  baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getSuppliers(): Observable<SupplierModel[]> { // Trae todos los proveedores
    return this.http.get<ObjSupplierResponseArray>(`${ this.baseUrl }/suppliers`).pipe(
      map( (res) => res.data )
    );
  };

  getSupplier( idSupplier: string ): Observable<SupplierModel> { // Trae un proveedor por su id
    return this.http.get<ObjSupplierResponse>(`${ this.baseUrl }/suppliers/${ idSupplier }`).pipe(
      map( (res) => res.data )
    );
  };
  
}
