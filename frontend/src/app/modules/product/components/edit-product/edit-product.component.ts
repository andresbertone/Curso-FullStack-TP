import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductModel } from '@app/models/product-model';

import { ProductService } from '@app/product-service/product.service';
import { SupplierService } from '@app/supplier-service/supplier.service';
import { SnackbarService } from '@app/snackbar-service/snackbar.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product!: ProductModel;
  suppliers: any = [];

  loading: boolean = false;

  constructor( private router: Router, 
               private productService: ProductService,
               private supplierService: SupplierService,
               private activatedRoute: ActivatedRoute,
               private snackbarService: SnackbarService ) {
}

  ngOnInit(): void {
    this.loading = true;
    this.loadProduct();
    this.loadSuppliers();
  }

  loadSuppliers() { // Carga los proveedores en el select
    this.supplierService.getSuppliers().subscribe(
      (suppliers) => {
        this.suppliers = suppliers;
      }
    );
  };

  loadProduct() { // Carga el producto seleccionado
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    if ( productId ) {
      this.productService.getProduct( productId ).subscribe(
        (product) => {
          this.product = product;
          this.loading = false;
        }
      );
    }
  };

  cancel() {
    this.router.navigate(['/product', this.product._id]);
  };

  save() {
    if ( this.formIsValid() ) { // Si el formulario es válido
      this.productService.updateProduct( this.product ).subscribe(
        () => {
          this.snackbarService.openSnackbar( "Producto actualizado correctamente" );
          this.router.navigate(['/product', this.product._id]);
        }
      )
    } else {
      this.snackbarService.openSnackbar( "Complete todos los campos obligatorios (*)" );
    }
  };

  formIsValid() {
    if ( this.product.name && this.product.image && this.product.price && this.product.stock && this.product.idSupplier ) { // Valida que los campos obligatorios del formulario estén completos
      if ( this.product.stock > 0 && this.product.price > 0 && ( this.product.quotas >= 1 || this.product.quotas === undefined ) ) { // Valida que los campos numericos del formulario sean positivos
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

}
