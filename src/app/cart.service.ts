import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../app/Models/products';
import { Cart } from './Models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[]=[];
  incart: Cart[]=[];
  readonly APIUrl = "https://localhost:44325/api";
  constructor(private httpClient: HttpClient) { }

  getAllinCart(): Observable < Cart[] > {
    return this.httpClient.get < Cart[] > (this.APIUrl + '/Cart_');
}
  addinCart(cart: Cart):Observable<any> {
      return this.httpClient.post<any>(this.APIUrl + '/Cart_',cart);

  }
  updatecart(id:number,cart: Cart):Observable<any>{
    return  this.httpClient.put<any>(this.APIUrl + '/Cart_/'+ id,cart);
  }
  deleteCart(id:number) :Observable<any>{
    return  this.httpClient.delete<any>(this.APIUrl + '/Cart_/'+ id);
    
  }
}
