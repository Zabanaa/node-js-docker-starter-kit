const express    = require("express")
const app        = express()
const bodyParser = require("body-parser")
const db         = require("./config/database")
const PORT       = process.env.PORT
const api        = require("./routes")

// add this to router files
// mongoose.Promise = global.Promise

// middleware
app.use(bodyParser.json())

// template engine
app.set("view engine", "pug")

// setup endpoints
app.use("/api/ninjas", api.ninjasEndpoints)

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => console.log("connection opened !"))

app.listen(PORT, () => {
    console.log("Server listening on port: ", PORT)
})

module.exports = app
