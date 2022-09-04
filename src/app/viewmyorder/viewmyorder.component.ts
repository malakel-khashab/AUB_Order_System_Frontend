import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MakeanorderService } from '../makeanorder.service';
import { Order } from '../Models/Order';

@Component({
  selector: 'app-viewmyorder',
  templateUrl: './viewmyorder.component.html',
  styleUrls: ['./viewmyorder.component.css']
})
export class ViewmyorderComponent implements OnInit {
  orders: Order[]=[];
  constructor(private route: Router,private makeanorderservice: MakeanorderService) { }

  ngOnInit(): void {
    this.tableview();
  }
  Back () :void  {
    this.route.navigate([''])
  }
  continue(id?:number){
    this.route.navigate(['View_My_Order_Details/'+id])
  
  }
  tableview(){
    this.makeanorderservice.getAllOrders().subscribe(data =>{
      this.orders = data});
    }
}
