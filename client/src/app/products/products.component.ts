import { Component, OnInit } from '@angular/core';
// import {Product} from '../interface/products.interface.ts'
import{ServiceService} from '../services/service.service'
import{Product} from '../interface/products.interface.ts'

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private serviceHttp:ServiceService) { }


  // availability:string='';

  // stockStatus(event:any){

    // if(event.type === "change"){

    //   let status = this.availability=event.target.value;
    //   // console.log(this.productList)
    //   if(status == "AvailableOnly"){
    //     this.products.forEach(item =>{
    //       if(item.stockAvail === false){
    //         item.display = false
    //       }
    //     })
    //     // return true;
    //   }else{
    //     this.products.forEach(item => {
    //       item.display = true;
    //     })
    //   }



    // }

    // return false;

    // this.availability=event.target.value;
    // console.log(this.availability=event.target.value);
    // let status = this.availability=event.target.value;

    // if(status == "AvailableOnly")
    //         return true;
    //   console.log(document.querySelector(".itemDisplay"))
    //      for(let i =0; i < this.products.length ; i++){
    //        if(this.products[i].stockAvail === false){

    //        }
    //      }
    //     return true;
    // else
    // return false








  ngOnInit(): void {
  //  console.log("Hello")
    // this.serviceHttp.getOnlinelProducts().subscribe(item=>{
    //   this.products = item

      // console.log(this.products);
    // })
  }

}
