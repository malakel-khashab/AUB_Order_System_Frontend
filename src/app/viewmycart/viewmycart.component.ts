import { VariableBinding, Xliff2 } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../Models/Cart';
import { Product } from '../Models/products';
import { MakeanorderService } from '../makeanorder.service';
import { Order } from '../Models/Order';

@Component({
  selector: 'app-viewmycart',
  templateUrl: './viewmycart.component.html',
  styleUrls: ['./viewmycart.component.css']
})
export class ViewmycartComponent implements OnInit {

  products: Product[]=[];
  productsincart: Cart[]=[];
  ID: string ='';
  totalpricevalue: string ='';
  showForm= false;
  
  quantityupdateform = new FormGroup({
    newquantity:new FormControl('',[Validators.required,Validators.pattern('^\[1-9]+')]) });

  detailsform = new FormGroup({
        CustomerName:new FormControl('',[Validators.required]),
       Customerphone:new FormControl('',[Validators.required]),
       Customeraddress:new FormControl('',[Validators.required]),
       CustomerCountry:new FormControl('',[Validators.required]),
       CustomerEmail:new FormControl('',[Validators.required]),
       comments:new FormControl('')
    });

  constructor(private route: Router,private cartService: CartService,
    private makeanorderservice: MakeanorderService) { }

  ngOnInit(): void {
    this.tableview();
  }
  tableview(){
    this.cartService.getAllinCart().subscribe(data =>{
      this.productsincart = data});
    }
  Back () :void  {
    this.route.navigate([''])
  }
  Order () :void  {
    this.showForm = true;
  }

  Cancel () :void  {
    length=this.productsincart.length;
    for (let i = 0; i < length; i++) {
      this.route.navigate([''])
      this.delete(this.productsincart[i].cartId);
    }
    
  }
  delete(ID: any){
    this.cartService.deleteCart(ID).subscribe(data =>{});
    window.location.reload();
  }
  totalprice(x:any,y:any) : number{
    var x1=Number(x);
    var x2=Number(y);
    return x1*x2;
  }
  update(ID: any,newcart :Cart){
    let cart=new Cart();
    cart.product_Description=newcart.product_Description;
    cart.product_Name=newcart.product_Name;
    cart.product_Price=newcart.product_Price;
    cart.product_Quantity=this.quantityupdateform.controls.newquantity.value?.toString();
    this.totalpricevalue=`${this.totalprice(cart.product_Price,cart.product_Quantity)}`;
    cart.total_Product_Price=this.totalpricevalue;
    this.cartService.updatecart(ID,cart).subscribe(data =>{});
    window.location.reload();
  }
  overallprice() : any{
    length=this.productsincart.length;
    var sum=0;
    for (let i = 0; i < length; i++) {
      sum=sum+Number(this.productsincart[i].total_Product_Price);
    }
    return sum;
  }
  txtChange(){
    console.log('form status  :'+this.detailsform.valid);
  }
  okay(){
    let order=new Order();
    order.customer_Address=this.detailsform.controls.Customeraddress.value?.toString();
    order.customer_Country=this.detailsform.controls.CustomerCountry.value?.toString();
    order.customer_Email=this.detailsform.controls.CustomerEmail.value?.toString();
    order.customer_Name=this.detailsform.controls.CustomerName.value?.toString();
    order.customer_Phone=this.detailsform.controls.Customerphone.value?.toString();
    order.order_Comments=this.detailsform.controls.comments.value?.toString();
    order.order_Order_Date=new Date();
    order.total=this.overallprice().toString();
    this.makeanorderservice.makeanorder(order).subscribe(data =>{});
    window.location.reload();
    this.route.navigate([''])
    
  }

}
