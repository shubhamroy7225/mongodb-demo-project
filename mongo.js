const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://shubhamjayswal:DhtfcwpMRF1LPJ1t@cluster0.c0vfi.mongodb.net/productDatabase?retryWrites=true&w=majority";
const createProduct = async (req, res, next) => {
    const productData = {
        name:req.body.name,
        price:req.body.price
    }
    const client = new MongoClient(url)
    try{
        await client.connect({useUnifiedTopology: true})
        const db =  client.db()
        const result =db.collection('products').insertOne(productData)
    }catch(error){
        return res.json({message:'Could not store data'})

    }
  client.close()
res.json(productData)
};
const getProducts = async (req, res, next) => {
    let products;
    const client = new MongoClient(url)
    try{
        await client.connect()
        const db =  client.db()
        products=await db.collection('products').find().toArray()
    }catch(error){
        return res.json({message:'Could not store data'})

    }
  client.close()
res.json(products)
};
exports.createProduct = createProduct;
exports.getProducts = getProducts;
