const express = require("express");
const router = express.Router();
const productController = require("../controller/product.js");

const multer = require("multer");

const storage = multer.diskStorage({
  destination:function (req,file,cb) {
    cb(null,"uploads/");
  },
  filename:function (req,file,cb) {
    cb(null , file.originalname)
  }
})

// Initialize multer middleware

const upload = multer({storage:storage});


router
  .post("/products" ,upload.single("image"), productController.createProduct)
  .get("/products", productController.getProducts)
  .get("/products/:id", productController.getproduct)
  .put("/products/:id", productController.replaceProduct)
  .patch("/products/:id", productController.updateProduct)
  .delete("/products/:id", productController.deleteProduct);

exports.router = router;