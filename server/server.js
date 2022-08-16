
import express from 'express';
import mysql from 'mysql2';

import cors from 'cors';
import 'dotenv/config';
// const db = mysql.createConnection({
//   host:'localhost',
//   port:8889,
//   user:'root',
//   password:'root',
//   database:'green-around-the-world-db'
// })

// const db = mysql.createConnection({
//   host: process.env.DBHOST,
//   port: process.env.DBPORT,
//   user: process.env.DBUSER,
//   password: process.env.DBPASSWORD,
//   database: process.env.DBDATABASE,


  

// })

const db = mysql.createPool({
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,


  

})

// var db = mysql.createPool(dbConfig);
// db.getConnection(function(err, connection) {
//         //  Changed this line:
//           // mysql -> connection.destroy();
//           // To this line:
//            db.releaseConnection(connection); 
// })





const server = express();
server.use(cors());
server.use(express.json());




// db.connect(error=>{
//   if(error) console.log('Sorry cannot connect to db: ' , error);
//   else console.log('Connected to mysql db');
// })



// CALL `login`(@p0, @p1);
// server.post('/login', (req, res)=>{
//   let email = req.body.email;
//   let password = req.body.password;
//  //  db.query = "SELECT * FROM `users` WHERE users.email = `${emial}` AND users.password = `${password}`";

//  let loginQuery = 'CALL `login`(?, ?);'

//  db.query(loginQuery, [email, password], (error, data, fields)=>{
//    if(error){
//      res.json({ErrorMessage:error});
//    }else{
//      if(data[0].length === 0){
//        res.json({data:data[0], login: false, message: "Sorry, you have provided wrong credentials"})
//      }else{
//        res.json({
//          // data:data[0],
//          UserID:data[0].UserID, 
//          email:data[0].email, 
//          data:data[0],
//          login: true, 
//          message: "Login successful"});
//          // create the Auth key
//      }
//    }
//  })


// })



server.delete('/deleteproduct/:id', (req, res)=>{
  let id = req.params.id;
  let query = "CALL `deleteProducts`(?);"
  db.query(query, [id], (error, data)=>{
    if(error){
       res.json({deleteUser:false, message:error});
    }else{
      res.json({deleteUser: true, message:"User deleted successfully"})
    }
  })
})




server.put('/update', (req, res) => {
        let id = req.body.id;
        let imageFront = req.body.imageFront;
         let imageBack = req.body.imageBack;
        //  let image2 = "./assets/" + req.body.image2;
         let title = req.body.title;
         let description = req.body.description;
         let original_price = req.body.original_price;
         let price = req.body.price;
         let stock = req.body.stock;
         let display = req.body.display;

  let query = "CALL `UpdateProducts`(?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(query, [id,imageFront, imageBack,title,description,original_price,price,stock, display], (error, data, fields)=>{
    if(error){
      res.json({ErrorMessage:error});
    }else{
      res.json({
        message:"successful!",
        update:true,
        data:data
        
      })
    }
  })
});


server.post('/login', (req, res)=>{
  let user_name = req.body.user_name;
  let password = req.body.password;
 //  db.query = "SELECT * FROM `users` WHERE users.email = `${emial}` AND users.password = `${password}`";

 let loginQuery = "CALL `AdminLogin`(?, ?);"

 

 db.query(loginQuery, [ user_name, password], (error, data, fields)=>{
   if(error){
     res.json({ErrorMessage:error});
   }else{
     if(data[0].length === 0){
       res.json({data:data[0], login: false, message: "Sorry, you have provided wrong credentials"})
     }else{
       res.json({
         // data:data[0],
         UserID:data[0].UserID, 
         email:data[0].email, 
         data:data[0],
         login: true, 
         message: "Login successful"});
         // create the Auth key
     }
   }
 })


})


// CALL `newProducts`(@p0, @p1, @p2, @p3, @p4, @p5, @p6)
server.post('/newProducts',(req, res)=>{
         let imageFront = req.body.imageFront;
         let imageBack = req.body.imageBack;
        //  let image2 = "./assets/" + req.body.image2;
         let title = req.body.title;
         let description = req.body.description;
         let original_price = req.body.original_price;
         let price = req.body.price;
         let stock = req.body.stock;
         let display = req.body.display;

         let addProducts = "CALL `newProducts`(?, ?, ?, ?, ?, ?, ?,?);"
         db.query(addProducts, [imageFront, imageBack,title,description,original_price,price,stock, display], (error, data, fields)=>{
          if(error){
            res.json({ErrorMessage:error});
          }else{
            res.json({
              message:"successful!",
              addNewProducts:true,
              
            })
          }
        })
         })


         server.get('/allProducts', (req,res)=>{
          let allProducts = "CALL `All_products`();"
          db.query(allProducts, (error, data, fields)=>{
            if(error) res.json({ErrorMessage:error
          })
          else{res.json(data[0]);
          }
        })
        })




server.get('/products', (req,res)=>{
  let allProducts = "CALL `Online_Products`()";
  db.query(allProducts, (error, data, fields)=>{
    if(error) res.json({ErrorMessage:error
  })
  else{res.json(data[0]);
  }
})
})


server.get('/products/:id', (req,res)=>{
  let id_from_client = req.params.id;
  let productById = "CALL `ProductById`(?)";

  db.query(productById,[id_from_client], (error,data,fields)=>{
    if(error) res.json({
      ErrorMessage:error
    });
    else{
      res.json(data[0][0]);}
});
});









// db.query(`SELECT * FROM products WHERE productID = ${id_from_client}`, (error,data,fields)=>{
//   if(error) res.json({
//     ErrorMessage:error
//   });
//   else{
//     res.json(data[0]);}
// });

// });



// server.get('/products', (req, res)=>{
//     res.json(productJsonData);
//     // res.send("Test. Node server works!");
// })

// server.get('/products/:id',(req, res)=>{
//   let id_from_client = req.params.id;

//   res.json(productJsonData.find(x=>x.productID == id_from_client));
//   // res.send("Text. Node server with an id works")
//   // console.log(productId)
// })



server.listen(4600, function(){
// console.log("Node express server is now running on port 4600")
console.log("Node express server is now running on port" , process.env.DBPORT)
});

// server.listen(4600, function(){
//   // console.log("Node express server is now running on port 4600")
//   console.log("Node express server is now running on port" , process.env.DBPORT)
//   });




// let productJsonData=[

// {     productID:1,
//       imageFront:'./assets/ecological_beeswax_wrap.jpg' ,
//       imageFrontAlt:"beeswax wrap 4 wariety sets",
//       imageBack:'./assets/ecological_beeswax_wrap2.webp',
//       imageBackAlt:"beeswax wraps",
//       title:"BEESWAX WRAP 4 VARIETY SETS",
//       description:"Perfect for sandwiches,  lettuce and herbs, covering containers with no lid, and bundling items together like loose veggies. Get 4 of our top selling beeswax wrap packs at a discount! YOU WILL GET LEMONS, BEE, OCEAN AND PACIFIC NORTHWEST.",
//       originalPrice:150.00,
//       price:135.00,
//       stock:"available",
//       stockAvail:true,
//       display:true,
//     },
//     {
//       productID:2,
//       imageBack:'./assets/swedish_ecological_cloth2.webp',
//       imageBackAlt:"swedish ecological cloth",
//       imageFront:'./assets/swedish_ecological_cloth.jpg',
//       imageFrontAlt:"swedish ecological cloth",

//       title:"SWEDISH DISHCLOTH X4",
//       description:"One Swedish Dishcloth replaces approximately 17 rolls of paper towel and absorbs up to 20x its weight! Safe for nearly all surfaces, this cloth is perfect for household chores, cleaning up spills, washing dishes, polishing and more. Use with or without cleaning products.",
//       originalPrice:80.50,
//       price:60.99,
//       stock:"Not available",
//       stockAvail:false,
//       display:true
//     },
//     {
//       productID:3,
//       imageBack:'./assets/ecological_bundle_2.webp',
//       imageFrontAlt:"ecological bundle",
//       imageFront:'./assets/ecological_bundle.jpg',
//       imageBackAlt:"ecological bundle",
//       title:"GREEN AROUND THE WORLD BUNDLE",
//       description:"This bundle includes 1 Beeswax wrap variety set, 1 small swedish dishcloth, 2 produce bags, 1 solid dishblock in lavender and lemongrass, 1 long handled bamboo scrub brush, 1 handled bamboo scrub brush, 1 kichen loofah scrubber, 2 multipurpose spray tablets.",
//       originalPrice:100.50,
//       price:80.99,
//       stock:"available",
//       stockAvail:true,
//       display:true

//     }


//   ]





