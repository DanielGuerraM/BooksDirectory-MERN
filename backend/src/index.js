require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('morgan');
const cors = require('cors');

const {mongoose} = require('./database');

const app = express();
const port = 4000;

//settings
app.set('port', process.env.port || port);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/users.route'));   
app.use('/api/books', require('./routes/books.route'));

//Static files

app.listen(app.get('port'),() => {
    console.log(`The server on port ${app.get('port')}`);
});