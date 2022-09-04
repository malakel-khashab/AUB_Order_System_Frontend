import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderProduct } from './Models/Orderproduct';
import { Order } from './Models/Order';

@Injectable({
  providedIn: 'root'
})
export class MakeanorderService {
  readonly APIUrl = "https://localhost:44325/api";

  constructor(private httpClient: HttpClient) { }

  getAllOrders(): Observable < Order[] > {
    return this.httpClient.get < Order[] > (this.APIUrl + '/Order_');
}
  makeanorder(order: Order): Observable <any>{
    return this.httpClient.post<any>(this.APIUrl + '/Order_',order);
  }
  getOrderbyID(id:number): Observable < Order > {
    return this.httpClient.get < Order> (this.APIUrl + '/Order_/'+id);
}
}
