import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { SupplierModel } from '@app/models/supplier-model';
import { ObjSupplierResponseArray } from '@app/models/objSupplierResponseArray';


@Injectable()
export class SupplierService {

  baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getSuppliers(): Observable<SupplierModel[]> {
    return this.http.get<ObjSupplierResponseArray>(`${ this.baseUrl }/suppliers`).pipe(
      map( res => res.data )
    );
  }
}
