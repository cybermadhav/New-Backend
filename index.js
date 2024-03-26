require('dotenv').config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const server = express();
const productRouter = require("./routes/product.js")


// database password : JjVKXCB89fwWHwcO
// console.log(process.env.DB_PASSWORD);


const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected")
};



// body parser
server.use(cors());
server.use(express.json());
server.use(express.static('build'));
// Serve files from the 'uploads' directory
server.use('/uploads', express.static(path.join(__dirname, 'uploads')));
server.use("/api",productRouter.router);
// server.post("/api/products",upload.single("image"),(req,res)=>{
//   console.log(req.body);
// })




server.listen(process.env.PORT);
