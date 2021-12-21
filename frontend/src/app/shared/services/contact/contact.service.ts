import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor( private http: HttpClient ) { }

  send( contact: any ) {
    return this.http.post( 'https://formspree.io/f/mrgjgvdd', contact );
  };

}
