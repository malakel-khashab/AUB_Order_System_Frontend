import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { AddnewproductpageComponent } from './addnewproductpage/addnewproductpage.component';
import { ViewmycartComponent } from './viewmycart/viewmycart.component';
import { ViewmyorderComponent } from './viewmyorder/viewmyorder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    AddnewproductpageComponent,
    ViewmycartComponent,
    ViewmyorderComponent,
    OrderdetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
