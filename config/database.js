// database config will go here
const mongoose = require("mongoose")
const { MONGO_DB_URI } = process.env
mongoose.Promise = global.Promise

try {
    mongoose.connect(MONGO_DB_URI)
} catch (error) {
    /* handle error */
    throw new Error("Something Happened", error)
}

const connection = mongoose.connection

module.exports = connection
