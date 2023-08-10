// let DiffData= require("./diff.js")
// const fs =require("fs")

// const syncData= fs.readFileSync("demo.txt","utf-8")

// console.log(syncData)

// fs.readFile("demo.txt",'utf-8',(err,txt)=>{
//     console.log(txt)
// })

// console.log(DiffData.sum(2,4))

// const http = require("http");

require("dotenv").config()
const express = require("express");
const mongoose = require('mongoose');
const cors= require("cors")
const path= require("path")

const server = express();

const ProductRouter= require('./Router/ProductRoute.js')

console.log(process.env.DB_PASSWORD)

//mongoose connect
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION);
console.log("Database Connected")
 
}


// body parser
server.use(cors())
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use('/',ProductRouter.ProductRouter)
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})

//CRUD


server.listen(8080, () => {
  console.log("Server Started");
});
