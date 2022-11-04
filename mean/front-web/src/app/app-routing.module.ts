import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  {
   path:'product',
   component:ProductsComponent,
   pathMatch:'full'
  },
  {
    path:'product/add',
    component:ProductInsertComponent,
    pathMatch:'full'
  },
  {
    path:'product/update/:id',
    component:ProductUpdateComponent
  },
  {
    path:'product/delete/:id',
    component:ProductDeleteComponent
  },
  {
    path:'product/manage',
    component:ProductManagerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
