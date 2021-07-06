const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    owner: {type: String, required: true},
    text: {type: String, required: true}
})

module.exports = mongoose.model('Post', PostSchema)