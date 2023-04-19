const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl = "mongodb://127.0.0.1";
const client = new MongoClient(connectionUrl);

const dbName ="carsCrudApp";

async function main(){
    await client.connect()
    console.log("Connected!");
    const db = client.db(dbName);
    const collection = db.collection("cars");

    /* await addNewCar(collection) */
    await updateCar (collection);
    await findAllCars(collection);


    return "done!";
}

async function addNewCar(collection){
    const newCar = {
        make: "Saab",
        model: "9000",
        year: 1999
    };

    const result = await collection.insertOne(newCar);

    console.log({result});
}

async function findAllCars(collection){
    const findResult = await collection.find({}).toArray();
    console.log({findResult});
}

async function updateCar (collection) {
    const objectId = new ObjectId("6439413c8286730e85fce367")
    const updateResult = await collection.updateOne({ _id: objectId }, {$set: { distance: 10000 }});
    console.log({updateResult});
}

main ()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());