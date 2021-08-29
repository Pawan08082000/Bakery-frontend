import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin.component';
const routes: Routes = [
  {
    path:'', 
    component: AdminComponent,
    children: [
      {
        path:'addproduct', component: AddProductComponent
      },
      {
        path:'editproduct/:id', component: AddProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
