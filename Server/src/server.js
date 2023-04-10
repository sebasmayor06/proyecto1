const express = require('express');
const morgan = require("morgan");
const router = require('./routes/index');
const server = express();
const PORT = 3001;
const cors = require ("cors");
const {conn} = require("./DB_connection");


server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use("/",router)


conn.sync({alter:true}).then(()=>
   console.log ('DataBase Connected'),
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT)
   })
);





// const http= require("http");
// const getCharById  = require ("./controllers/getCharById")
// const getCharDetail = require ("./controllers/getCharDetail")

// http.createServer((req,res)=>{

// res.setHeader('Access-Control-Allow-Origin', '*');
// const {url}=req; 


// if (url.includes("detail")){
//     const id = url.split("/").at(-1);
//     getCharDetail(res,id)
    
//     }

// if (url.includes("character")){
// const id = url.split("/").at(-1);
// getCharById(res,id)

// }

// })

// .listen (3001, "localhost");