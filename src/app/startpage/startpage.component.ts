import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GettingService } from '../getting.service';
import { CartService } from '../cart.service';
import { Product } from '../Models/products';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cart } from '../Models/Cart';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {
  products: Product[] = [];
  incart: Cart[]=[];
  totalpricevalue: string ='';
  
  readonly APIUrl = "https://localhost:44325/";
  quantityform = new FormGroup({
    quantity:new FormControl('',[Validators.required,Validators.pattern('^\[1-9]+')]) });

    constructor(private route: Router, private gettingService: GettingService
      , private cartService: CartService) { }
  ngOnInit(): void {
    this.tableview();
  }
  txtChange(){
    console.log('form status  :'+this.quantityform.valid);
  }

  tableview(){
    this.gettingService.getAllproducts().subscribe(data =>{
      this.products = data});
    }
  AddNewProduct () :void  {
    this.route.navigate(['/Add_New_Product'])
}
ViewMyCart () :void  {
  this.route.navigate(['/View_My_Cart'])
}
ViewMyOrders(): void{
  this.route.navigate(['/View_My_Orders'])
}
totalprice(x:any,y:any) : number{
  var x1=Number(x);
  var x2=Number(y);
  return x1*x2;
}
addtoCart(product: Product){
    let cart=new Cart();
    cart.productId=product.productId;
    cart.product_Quantity=this.quantityform.controls.quantity.value?.toString();
    this.quantityform.controls.quantity.reset();
    this.totalpricevalue=`${this.totalprice(product.product_Price,cart.product_Quantity)}`;
    cart.total_Product_Price=this.totalpricevalue;
    this.cartService.addinCart(cart).subscribe(data =>{});

}
}
