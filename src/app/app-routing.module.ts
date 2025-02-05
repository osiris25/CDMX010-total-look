import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [ 
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'sales', component: SalesComponent
  },
  {
    path: 'categories', component: CategoryComponent
  },
  {
    path: '', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
