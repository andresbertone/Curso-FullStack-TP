import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if ( arg === '' ) return value;
    const filteredProducts: any[] = [];
    for ( const product of value ) {
      if ( product.name.toLowerCase().indexOf( arg.toLowerCase() ) > -1 ) {
        filteredProducts.push( product );
        console.log("filtrado");
      };
    };
    return filteredProducts;
  };

}
