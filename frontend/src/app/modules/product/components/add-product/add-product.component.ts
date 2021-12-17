import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SupplierModel } from '@app/models/supplier-model';

import { ProductService } from '@app/product-service/product.service';
import { SupplierService } from '@app/supplier-service/supplier.service';
import { SnackbarService } from '@app/snackbar-service/snackbar.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: any = {};
  suppliers: SupplierModel[] = [];

  constructor( private router: Router, 
               private productService: ProductService,
               private supplierService: SupplierService, 
               private snackbarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe(
      res => {
        this.suppliers = res;
      }
    )
  };

  cancel() {
    this.router.navigate(['/products']);
  };

  save() {
    if ( this.formIsValid() ) {
      this.productService.addProduct( this.product ).subscribe(
        () => {
          this.snackbarService.openSnackbar( "Producto agregado correctamente" );
          this.router.navigate(['/products']);
        }
      )
    }
  };

  formIsValid() {
    if ( this.product.name && this.product.image && this.product.price && this.product.stock && this.product.idSupplier ) {
      if ( this.product.stock >= 0 && this.product.price >= 0 && ( this.product.quotas > 0 || this.product.quotas === undefined ) ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

}
