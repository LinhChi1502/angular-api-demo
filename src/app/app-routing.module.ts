import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';
import {DetailProductComponent} from './product/detail-product/detail-product.component';

const routes: Routes = [
  {path: "create-product", component: CreateProductComponent},
  {path: "list-product", component: ListProductComponent},
  {path: "edit-product/:id", component: EditProductComponent},
  {path: "delete-product/:id", component: DeleteProductComponent},
  {path: "detail-product/:id", component: DetailProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
