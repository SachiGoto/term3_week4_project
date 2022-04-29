import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../interface/products.interface.ts'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private productUrl = "http://localhost:4600/products";
  constructor(private clientHttp:HttpClient) { }

  getAllProducts(){
    return this.clientHttp.get<Product[]>(this.productUrl);
  }

  getProductById(id:number){
    return this.clientHttp.get<Product>(this.productUrl + "/" + id);
  }
}
