const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const UserSchema = new Schema({
    name: {type: String, require: true, unique: true},
    password: {type: String, require: true}
})

module.exports = mongoose.model('User', UserSchema)