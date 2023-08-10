// const fs = require("fs");

const model = require("../model/productSchema");
const Product = model.Product;

exports.createProduct = (req, res) => {
  const product = new Product(req.body);

  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.getAllProducts = async (req, res) => {
  const products= await Product.find()
  //const products= await Product.find({$and:[{price:{$gt:549}},{id:{$gt:5}}]})
  // const products= await Product.find({$and:[{price:{$gt:549}},{id:{$gt:5}}]}).sort({"price":-1}).limit(2)
  // const products= await Product.find({$and:[{price:{$gt:549}},{id:{$gt:5}}]},{'title':1,'price':1})
  res.json(products);
};

exports.getproduct = async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const products= await Product.findById(id)
  // const product = products.find((p) => p.id === id);
  res.json(products);
};

exports.replaceProduct = async(req, res) => {
  const id = req.params.id;
  try {
    const products= await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
  
 
};

exports.updateProduct =async (req, res) => {
  const id = req.params.id;
  try {
    const products= await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteProduct = async(req, res) => {
  const id = req.params.id;
  try {
    const products= await Product.findOneAndDelete({_id:id});
    res.status(201).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};
