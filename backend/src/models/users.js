const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    names: {type: String, require: true, trim: true},
    lastname: {type: String, require: true},
    email: {type: String, require: true, trim: true, unique: true},
    userName: {type: String, require: true, trim: true, unique: true},
    password: {type: String, require: true},
    date: {type: Date, default: Date.now}
},{timestamps: true});

module.exports = mongoose.model('User', userSchema);