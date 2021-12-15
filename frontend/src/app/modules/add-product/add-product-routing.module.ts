import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './components/add-product/add-product.component';

import { AuthGuard } from '@app/guards/auth.guard';


const routes: Routes = [
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductRoutingModule { }
