const express = require ("express");
const app = express (); 

app.all("/", (req, res, next) => {
    console.log("ALL IN");

    next();
})

app.get('/', (req, res) => {
    console.log("GETTING");
    res.send("Response to GET request")
});

app.post('/', (req, res) => {
    console.log("POSTING");
    res.send("Response to Post request")
})

app.put('/', (req, res) => {
    console.log("PUTTING");
    res.send("Response to PUT request")
});

app.delete('/', (req, res) => {
    console.log("DELETING");
    res.send("Response to DELETE request")
});

app.get('/hello', (req, res) => {
    console.log("HELLOING");
    res.send("Hello ")
});

app.get("/users/:username", (req, res) => {
    const x = req.params.username;
    console.log({ x });
    res.send("Thanks for the username")
});

app.get("/users/:username/books/:booksname", (req, res) => {
    const x = req.params.username;
    const y = req.params.booksname;
    console.log({ x, y });
    res.send("Thanks for the username and bookname")
});

app.all("/multiple", (req, res, next) => {
    console.log("This is  / multiple #1");

    next()
}, (req, res) => {
    console.log("This is  / multiple #2");

    res.send("MULTIPLE")
});

const middlewareFunction = (req, res, next) => {
    console.log("IN THE MIDDLE");

    if(loggedIn){
    next();
    }
    else {
        res.sendStatus(403);
    }
};

app.get("/middle1", middlewareFunction, (req, res) => {
        res.send("middle1")
});

app.get("/middle2", middlewareFunction, (req, res) => {
    res.send("middle2")
});

app.route("/methods")
    .get((req, res) => {
        res.send("Methods get")
    })
    .post((req, res) => {
        res.send("Methods post")
    })

app.listen(8000, () => {
    console.log("http://localhost:8000/");
});