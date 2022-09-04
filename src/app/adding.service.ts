import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from './Models/products';

@Injectable({
  providedIn: 'root'
})
export class AddingService {

  readonly APIUrl = "https://localhost:44325/api";

  constructor(private httpClient: HttpClient) { }
  addProductList(product: Product):Observable<any> {
    return this.httpClient.post<any>(this.APIUrl + '/Product_',product);
}

}
