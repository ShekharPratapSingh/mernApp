const express = require("express");
const ProductRouter= express.Router()
const productController= require('../Controller/Product.js')

ProductRouter
.get("/products", productController.getAllProducts)

.get("/products/:id", productController.getproduct)

.post("/products", productController.createProduct)

.put("/products/:id", productController.replaceProduct)

.patch("/products/:id", productController.updateProduct)

.delete("/products/:id", productController.deleteProduct)

exports.ProductRouter=ProductRouter