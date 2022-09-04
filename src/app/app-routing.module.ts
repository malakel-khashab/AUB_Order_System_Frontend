import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewproductpageComponent } from './addnewproductpage/addnewproductpage.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ViewmycartComponent } from './viewmycart/viewmycart.component';
import { ViewmyorderComponent } from './viewmyorder/viewmyorder.component';

const routes: Routes = [
  {path:'',  component: StartpageComponent},
  {path:'Add_New_Product',  component: AddnewproductpageComponent },
  {path:'View_My_Cart',  component: ViewmycartComponent },
  {path:'View_My_Orders',  component: ViewmyorderComponent },
  {path:'View_My_Order_Details/:id',  component: OrderdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
