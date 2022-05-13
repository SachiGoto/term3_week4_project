import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:"products", component:ProductsComponent},
  {path:"products/:id", component:ProductDetailComponent},
  {path:"", component:HomeComponent},
  {path:"admin", component:AdminComponent},
  {path:'login', component:LoginComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'newproduct', component:NewproductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
