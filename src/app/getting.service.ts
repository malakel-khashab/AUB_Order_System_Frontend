import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Models/products';

@Injectable({
  providedIn: 'root'
})
export class GettingService {

  readonly APIUrl = "https://localhost:44325/api";

  constructor(private httpClient: HttpClient) { }
  getAllproducts(): Observable < Product[] > {
    return this.httpClient.get < Product[] > (this.APIUrl + '/Product_');
}
getProductbyID(id:number): Observable < Product > {
  return this.httpClient.get < Product> (this.APIUrl + '/Product_/'+id);
}
}
