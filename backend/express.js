import express from 'express';
import { 
    getProducts,
    getIds,
    getElementById,
    getElementByCategory,
    getDonorById,
    insertDonor,
    insertProduct
 } from './db.js';

//import bcrypt from 'bcrypt';

const server = express();
const PORT = 3401;

server.use(express.json())
//server.use(json());

server.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Working'
    })
})

//get all the products
server.get("/products", async (req, res) => {
    const products = await getProducts();
    res.status(200).json({ products })
}) 

//get all the ids
server.get("/ids", async (req, res) => {
    const products = await getIds();
    res.status(200).json({ products })
}) 

//get a single product by its id
server.get("/byid/:id", async (req, res) => {
    const product = await getElementById(req.params.id);
    res.status(200).json({ product })
})

//get a single category of products
server.get("/bycategory/:category", async (req, res) => {
    const product = await getElementByCategory(req.params.category);
    res.status(200).json({ product })
})

//get a donor by its id
server.get("/bydonorid/:id", async (req, res) => {
    const donor = await getDonorById(req.params.id);
    res.status(200).json({ donor })
})

//insert a new donor to the data base
server.post("/adddonor", async (req, res) => {
    const donor = await insertDonor(req.body);
    res.status(200).send("Doador adicionado com sucessos")
})

//insert a new donor to the data base
server.post("/addproduct", async (req, res) => {
    const product = await insertProduct(req.body);
    res.status(200).send("Produto adicionado com sucessos")
})

server.listen(PORT, () => console.log('À escuta em ' + PORT));