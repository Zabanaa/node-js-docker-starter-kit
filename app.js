const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000

mongoose.connect("mongodb://localhost:27017/mytestdb")

const db = mongoose.connection

app.get("/", (req, res) => {
    res.send("Hello New World")
})

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => console.log("connection opened !"))

app.listen(PORT, () => {
    console.log("Server listening on port: ", PORT)
})
