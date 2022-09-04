import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Order } from '../Models/Order';
import { MakeanorderService } from '../makeanorder.service';
import { GettingService } from '../getting.service';
import { Product } from '../Models/products';
import { OrderProduct } from '../Models/Orderproduct';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  readonly APIUrl = "https://localhost:44325/";

  orderPoducts: OrderProduct[]=[];
  requiredOrder: Order = new Order();
  id: any;
  constructor(private route: Router,private activeroute: ActivatedRoute,
    private makeanorderservice:MakeanorderService) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe(paramsId => {
      this.id = paramsId['id'];
      this.findOrder(this.id);

      console.log();
  });
  }
  Back () :void  {
    this.route.navigate(['View_My_Orders'])
  }
  findOrder(id: any){
   
    return this.makeanorderservice.getOrderbyID(id).subscribe(data =>{
      this.requiredOrder = data});  
  }

}
