import { Component, OnInit } from '@angular/core';
import{Product} from'./products.interface';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  availability:string='';

  stockStatus(event:any){

    if(event.type === "change"){

      let status = this.availability=event.target.value;
      // console.log(this.productList)
      if(status == "AvailableOnly"){
        this.productList.forEach(item =>{
          if(item.stockAvail === false){
            item.display = false
          }
        })
        // return true;
      }else{
        this.productList.forEach(item => {
          item.display = true;
        })
      }



    }

    // return false;

    // this.availability=event.target.value;
    // console.log(this.availability=event.target.value);
    // let status = this.availability=event.target.value;

    // if(status == "AvailableOnly")
            // return true;
      // console.log(document.querySelector(".itemDisplay"))
        //  for(let i =0; i < this.productList.length ; i++){
        //    if(this.productList[i].stockAvail === false){

          //  }
        //  }
        // return true;
    // else
    // return false
  }




  productList:Product[]=[
    {
      imageFront:'./assets/ecological_beeswax_wrap.jpg' ,
      imageFrontAlt:"beeswax wrap 4 wariety sets",
      imageBack:'./assets/ecological_beeswax_wrap2.webp',
      imageBackAlt:"beeswax wraps",
      title:"BEESWAX WRAP 4 VARIETY SETS",
      description:"Perfect for sandwiches,  lettuce and herbs, covering containers with no lid, and bundling items together like loose veggies. Get 4 of our top selling beeswax wrap packs at a discount! YOU WILL GET LEMONS, BEE, OCEAN AND PACIFIC NORTHWEST.",
      originalPrice:150.00,
      price:135.00,
      stock:"available",
      stockAvail:true,
      display:true,
    },
    {
      imageBack:'./assets/swedish_ecological_cloth2.webp',
      imageFrontAlt:"swedish ecological cloth",
      imageFront:'./assets/swedish_ecological_cloth.jpg',
      imageBackAlt:"swedish ecological cloth",

      title:"SWEDISH DISHCLOTH X4",
      description:"One Swedish Dishcloth replaces approximately 17 rolls of paper towel and absorbs up to 20x its weight! Safe for nearly all surfaces, this cloth is perfect for household chores, cleaning up spills, washing dishes, polishing and more. Use with or without cleaning products.",
      originalPrice:80.50,
      price:60.99,
      stock:"Not available",
      stockAvail:false,
      display:true
    },
    {
      imageBack:'./assets/ecological_bundle_2.webp',
      imageFrontAlt:"ecological bundle",
      imageFront:'./assets/ecological_bundle.jpg',
      imageBackAlt:"ecological bundle",
      title:"GREEN AROUND THE WORLD BUNDLE",
      description:"This bundle includes 1 Beeswax wrap variety set, 1 small swedish dishcloth, 2 produce bags, 1 solid dishblock in lavender and lemongrass, 1 long handled bamboo scrub brush, 1 handled bamboo scrub brush, 1 kichen loofah scrubber, 2 multipurpose spray tablets.",
      originalPrice:100.50,
      price:80.99,
      stock:"available",
      stockAvail:true,
      display:true

    }


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
