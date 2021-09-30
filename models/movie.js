const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Scheam({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String
    }
})
module.exports = mongoose.model("Movie", movieSchema)