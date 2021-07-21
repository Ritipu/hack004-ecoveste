//const mongodb = require('mongodb');
import mongodb from "mongodb";
//const bcrypt = require('bcrypt');
//import bcrypt from "bcrypt";
const saltRounds = 10;

const { MongoClient } = mongodb;

const URI = "mongodb://localhost:27017"
const DB_NAME = "EcoVest"
let client  

async function connect(uri) {
    try {
        if(client) return client;
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
    const res = await collection.findOne({_id: mongodb.ObjectId(id)});
    return res;
}

//return a group of products by category
export async function getElementByCategory(category) {
    const collection = await getCollection(DB_NAME, "products");
    const res = await collection.find({category: category}).toArray();
    return res;
}

// async function getCollection(dbName, collectionName) {
//     const aluno = await connect(URI);
//     const db = aluno.db(dbName);
//     return db.collection(collectionName);
// }

// //Insere as escolas manualmente na escolas.js
// async function insereEscola(escola) {
//     const collection = await getCollection(DB_NAME, "escolas");
//     const res = await collection.insertOne(escola)
//     console.log(escola, res)
//     return res.insertedId;
// }

// //Obtem as escola do utilizador
// async function obtemEscola(escolas_id) {
//     const collection = await getCollection(DB_NAME, "escolas");
//     const res = await collection.findOne({_id: mongodb.ObjectId(escolas_id)})
//     return res;
// }

// //Insere os professores manualmente na professores.js
// async function insereProfessor(professor) {
//     const collection = await getCollection(DB_NAME, "professores");
//     const res = await collection.insertOne(professor)
//     console.log(professor, res)
//     return res.insertedId;
// }

// async function obtemProfessores() {
//     const collection = await getCollection(DB_NAME, "professores");
//     const res = await collection.find().toArray();
//     return res;
// }

// //Obtem os professores
// async function obtemProfessor(professores_id) {
//     const collection = await getCollection(DB_NAME, "professores");
//     const res = await collection.findOne({_id: mongodb.ObjectId(professores_id)})
//     return res;
// }

// async function insereAluno(aluno) {
//     const collection = await getCollection(DB_NAME, "alunos");
//     aluno.password = await bcrypt.hash(aluno.password, saltRounds);
//     const res = await collection.insertOne(aluno)
//     // console.log(aluno, res)
//     return res.insertedId;
// }

// async function obtemAluno(aluno_id) {
//     const collection = await getCollection(DB_NAME, "alunos");
//     const res = await collection.findOne({_id: mongodb.ObjectId(aluno_id)})
//     return res;
// }

// async function obtemAlunoPorNome(username) {
//     const collection = await getCollection(DB_NAME, "alunos");
//     const res = await collection.findOne({username})
//     return res;
// }

// async function insereAnoLetivo(anoLetivo) {
//     const collection = await getCollection(DB_NAME, "anoLetivo");
//     const res = await collection.insertOne(anoLetivo)
//     console.log(anoLetivo, res)
//     return res.insertedId;
// }   

// async function obtemAnoLetivo(anoLetivo_id) {
//     const collection = await getCollection(DB_NAME, "anoLetivo");
//     const res = await collection.findOne({_id: mongodb.ObjectId(anoLetivo_id)})
//     return res;
// }

// async function insereLivros(livros) {
//     const collection = await getCollection(DB_NAME, "livros");
//     const res = await collection.insertOne(livros)
//     console.log(livros, res)
//     return res.insertedId;
// }

// async function obtemLivros() {
//     const collection = await getCollection(DB_NAME, "livros");
//     const res = await collection.find().toArray();
//     return res;
// }

// async function obtemLivro(livros_id) {
//     const collection = await getCollection(DB_NAME, "livros");
//     const res = await collection.findOne({_id: mongodb.ObjectId(livros_id)})
//     return res;
// }

// async function insereSessao(uid) {
//     const collection = await getCollection(DB_NAME, "sessoens");
//     const res = await collection.insertOne({
//         uid,
//         expiresAt: new Date(new Date().valueOf() + (5 * 60 * 1000))
//     })
//     return res.insertedId; 
// }

// async function obtemSessao(id) {
//     const collection = await getCollection(DB_NAME, "sessoens");
//     const res = await collection.findOne({_id: mongodb.ObjectId(id)})
//     return res; 
// }

// async function sessaoProlongada(id) {
//     const collection = await getCollection(DB_NAME, "sessoens");
//     const res = await collection.updateOne(
//         {_id: mongodb.ObjectId(id)},
//         {
//             $set: {
//                 expiresAt: new Date(new Date().valueOf() + (5 * 60 * 1000))
//             }
//         }
//     )
//     return res; 
// }

