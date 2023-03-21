const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
    tittle: {type: String, require: true},
    author: {type: String, require: true},
    publishYear: {type: Number, require: true},
    nationality: {type: String, require: true}
},{timestamps: true});

module.exports = mongoose.model('Books', bookSchema);