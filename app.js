const express = require ("express");
const exphbs = require ("express-handlebars");
const { MongoClient, ObjectId } = require("mongodb")
var bodyParser = require('body-parser')

const connectionUrl = "mongodb://127.0.0.1";
const client = new MongoClient(connectionUrl);

const dbName ="carsCrudApp";

async function getCarsCollection() {
    await client.connect()
    const db = client.db(dbName);
    const collection = db.collection("cars");
    return collection;
}

const app = express ();

app.engine('hbs', exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs"
}));

app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", async (req, res) => {
    const collection = await getCarsCollection();
    const findResult = await collection.find({}).toArray();
    
    res.render("home", { cars: findResult })
})

app.get("/new-car", async (req, res) => {
    res.render("new-car")
})

app.post("/new-car", async (req, res) => {
    const newCar = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
    };

    const collection = await getCarsCollection();

    await collection.insertOne(newCar);

    res.redirect("/")
})

app.listen(8000,  () => {
    console.log("http://localhost:8000/");
});