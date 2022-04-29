

import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors());





let productJsonData=[

{     productID:1,
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
      productID:2,
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
      productID:3,
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





server.get('/products', (req, res)=>{
    res.json(productJsonData);
    // res.send("Test. Node server works!");
})

server.get('/products/:id',(req, res)=>{
    let id_from_client = req.params.id;

    res.json(productJsonData.find(x=>x.productID == id_from_client));
    // res.send("Text. Node server with an id works")
    // console.log(productId)
})



server.listen(4600, function(){
  console.log("Node express server is now running on port 4600")
});
