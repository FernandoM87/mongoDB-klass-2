const { MongoClient } = require('mongodb');

const connectionUrl = "mongodb://localhost:27017/carsCrudApp";
const client = new MongoClient(connectionUrl);

const dbName ="carsCrudApp";

async function main(){
    await client.connect()
    console.log("Connected!");
    const db = client.db(dbName);
    const collection = db.collection("cars");

    const newCar = {
        make :"saab",
        model :"900",
        year: 1999
    };

    const result = await collection.insertOne(newCar);

    console.log({result});

    return "done!";
}

main ()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());