const { MongoClient } = require('mongodb');

const connectionUrl = "mongodb://127.0.0.1";
const client = new MongoClient(connectionUrl);

const dbName ="carsCrudApp";

async function main(){
    await client.connect()
    console.log("Connected!");
    const db = client.db(dbName);
    const collection = db.collection("cars");

    const findResult = await collection.find({}).toArray();

    console.log({result});

    return "done!";
}

async function addNewCar(){
    
}

main ()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());