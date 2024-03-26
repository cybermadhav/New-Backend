const fs = require("fs");
const model = require("../model/product.js");
const Product = model.Material;

exports.createProduct = async (req,res)=>{
      try{
        const imagename = {"thumbnail":req.file.filename};
        const data = {...req.body,...imagename};
        console.log(data);
      const product =  new Product(data);
      const doc = await product.save();
      res.status(201).json(doc);
      }catch(error){
        res.status(404).json(error);
      }
 }
exports.getProducts = async (req,res)=>{
    try{
      const products = await Product.find({});
      res.status(201).json(products);
    }catch(error){
      res.status(400).json(error);
    }
};
exports.getproduct = async (req,res)=>{
    const id = req.params.id;
    try{
       const product = await Product.findById(id).exec();
       res.status(201).json(product);
    }catch(error){
      res.status(400).json(error);
    }
}
exports.replaceProduct = async (req,res)=>{
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndReplace({"_id":id},req.body,{new:true});
      console.log(doc);
      res.status(201).json(doc);
    }catch(error){
      res.status(400).json(error);
    }
  }
  exports.updateProduct = async (req,res)=>{
    const id = req.params.id;
    try{
      // const doc = await Product.findOneAndUpdate({"_id":id},req.body,{new:true});
      const doc = await Product.findByIdAndUpdate(id,req.body,{new:true}).exec();
      res.status(200).json(doc);
    }catch(error){
      res.status(400).json(error);
    }
  }
  exports.deleteProduct = async (req,res)=>{
    const id = req.params.id;
    try{
      const doc = await Product.findByIdAndDelete(id);
      res.status(200).json(doc);
    }catch(error){
      res.status(400).json(error);
    }
   }