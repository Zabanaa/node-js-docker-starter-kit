const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Ninja = require("./schema")
const PORT = process.env.PORT || 5000

mongoose.connect("mongodb://database:27017/mytestdb")
mongoose.Promise = global.Promise

const db = mongoose.connection


app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello New World")
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
