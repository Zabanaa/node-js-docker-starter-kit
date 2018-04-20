const express    = require("express")
const app        = express()
const bodyParser = require("body-parser")
const db         = require("./config/database")
const PORT       = process.env.PORT

// middleware
app.use(bodyParser.json())

// template engine
app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("index", {
        title: "Hello Express",
        message: "Welcome to the starter kit"
    })
})

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => console.log("connection opened !"))

app.listen(PORT, () => {
    console.log("Server listening on port: ", PORT)
})

module.exports = app
