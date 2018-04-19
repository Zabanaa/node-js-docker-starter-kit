const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Ninja = require("./schema")
const db = require("./config/database")
const PORT = process.env.PORT

// add this to router files
// mongoose.Promise = global.Promise

// middleware
app.use(bodyParser.json())

// template engine
app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("index", {
        title: "Hello Express.js",
        message:"Hello from template"
    })
})

app.get("/ninjas", (req, res) => {
    Ninja.find({})
        .then( ninjas => res.send(ninjas))
})

app.get("/ninjas/:id", (req, res) => {
    Ninja.findOne({_id: req.params.id})
        .then( ninja => res.send(ninja))
})

app.post("/ninjas", (req, res) => {
    Ninja.create(req.body)
        .then( ninja => res.send(ninja) )

})

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => console.log("connection opened !"))


app.listen(PORT, () => {
    console.log("Server listening on port: ", PORT)
})
