const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
    .then(db => console.log('Conexion successfully'))
    .catch(err => console.log(err));

module.exports = mongoose;