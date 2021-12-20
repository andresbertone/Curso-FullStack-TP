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
    this.product.quotas = 1;
  }

  loadSuppliers() { // Carga los proveedores en el select
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
    if ( this.formIsValid() ) { // Si el formulario es válido
      this.productService.addProduct( this.product ).subscribe(
        () => {
          this.snackbarService.openSnackbar( "Producto agregado correctamente" );
          this.router.navigate(['/products']);
        }
      )
    } else {
      this.snackbarService.openSnackbar( "Complete todos los campos obligatorios (*)" );
    }
  };

  formIsValid() { 
    if ( this.product.name && this.product.image && this.product.price && this.product.stock && this.product.idSupplier ) { // Valida que los campos obligatorios del formulario estén completos
      if ( this.product.stock >= 0 && this.product.price >= 0 && ( this.product.quotas >= 1 || this.product.quotas === undefined ) ) { // Valida que los campos numéricos del formulario sean números positivos
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

}
