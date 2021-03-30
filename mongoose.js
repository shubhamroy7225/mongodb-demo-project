const mongoose = require("mongoose");
const Product = require("./models/product");
mongoose.connect(
  "mongodb+srv://shubhamjayswal:DhtfcwpMRF1LPJ1t@cluster0.c0vfi.mongodb.net/productDatabase?retryWrites=true&w=majority"
).then(()=>{
    console.log("Connected to the database")
}).catch(()=>{
    console.log('Connection failed');
});
const createProduct = async (req, res, next) => {
  const createProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createProduct.save()
  res.json(result)
};
const getProducts = async (req, res, next) => {
    const products = await Product.find() 
    res.json(products)
};
exports.createProduct=createProduct
exports.getProducts = getProducts