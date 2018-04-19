const mongoose = require("mongoose")
const NinjaSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"]
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }

})

const Ninja = mongoose.model("ninja", NinjaSchema)

module.exports = Ninja

