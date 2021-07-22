import mongodb from "mongodb";

const saltRounds = 10;

const { MongoClient } = mongodb;

const URI = "mongodb://localhost:27017"
const DB_NAME = "EcoVest"
let client

async function connect(uri) {
    try {
        if (client) return client;
        // Cria o cliente
        client = new MongoClient(uri, {
            useUnifiedTopology: true
        })

        // Aguarda a ligação
        await client.connect()
        // Retorna o cliente
        return client;

    } catch (err) {
        console.log(err);
    }
}

function closeConnection() {
    client.close();
}

async function getCollection(dbName, colName) {
    const client = await connect(URI)
    const db = client.db(dbName)
    return db.collection(colName)
}

//populate db with products
export async function insertProducts(products) {
    const collection = await getCollection(DB_NAME, "products");
    const res = await collection.insertMany(products);
    return res;
}

//populate db with donors
export async function insertDonors(donors) {
    const collection = await getCollection(DB_NAME, "donors");
    const res = await collection.insertMany(donors);
    return res;
}

//return the products to the frontend
export async function getProducts() {
    const collection = await getCollection(DB_NAME, "products");
    const res = await collection.find().toArray();
    return res;
}

//return the products ids to the frontend
export async function getIds() {
    const collection = await getCollection(DB_NAME, "products");
    const res = await collection.find().toArray();
    return res.map(e => e._id);
}

//return a single product filtered by id to the frontend
export async function getElementById(id) {
    const collection = await getCollection(DB_NAME, "products");
    const res = await collection.findOne({ _id: mongodb.ObjectId(id) });
    return res;
}

//return a group of products by category
export async function getElementByCategory(category) {
    const collection = await getCollection(DB_NAME, "products");
    const res = await collection.find({ category: category }).toArray();
    return res;
}

//return a single donor by its id
export async function getDonorById(id) {
    const collection = await getCollection(DB_NAME, "donors");
    const res = await collection.findOne({ donorId: id });
    return res;
}

//insert a new donor to the data base
export async function insertDonor(body) {
    const collection = await getCollection(DB_NAME, "donors");
    const res = await collection.insertOne({
        donorId: body.donorId,
        name: body.name,
        email: body.email,
        tel: body.tel,
        avatar: body.avatar
    });
    return res;
}

//insert a new product to the data base
export async function insertProduct(body) {
    const collection = await getCollection(DB_NAME, "products");
    const res = await collection.insertOne({
        name: body.name,
        category: body.category,
        size: body.size,
        description: body.description,
        image: body.image,
        location: body.location,
        donorId: body.donorId

    });
    return res;
}

