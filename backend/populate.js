import * as fs from 'fs/promises'
import {insertProducts} from "./db.js"
import {insertDonors} from "./db.js"

async function populate() {
    const itens = await fs.readFile("./products.json")
    const json =  JSON.parse(itens.toString())
    insertProducts(json.itens);

    const donors = await fs.readFile("./donors.json")
    const jsond =  JSON.parse(donors.toString())
    insertDonors(jsond.donors);
}

//teste


populate().then(() => console.log('db populated'))