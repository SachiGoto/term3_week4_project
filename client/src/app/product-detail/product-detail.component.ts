import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/products.interface.ts';
import {ServiceService } from '../services/service.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private serverHttp:ServiceService) { }

  products:Product;

  ngOnInit(): void {
    let productID:any = this.route.snapshot.paramMap.get("id");
    // get("id") the router name "id".

    this.serverHttp.getProductById(productID).subscribe(product =>{
      this.products = product;


    })
  }

}
