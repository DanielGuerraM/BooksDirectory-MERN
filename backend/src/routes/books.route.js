const express = require('express');
const router = express.Router();

const { postBook } = require('../controllers/addBook.controller');
const { getAllBooks, getBookById } = require('../controllers/book.controller');
const { putBook } = require('../controllers/updateBook.controller');
const { deleteBook } = require('../controllers/deleteBook.controller');

router.route('/')
    .get(getAllBooks);
    
router.route('/:id')
    .get(getBookById);

router.route('/create')
    .post(postBook);

router.route('/update/:id')
    .put(putBook);

router.route('/delete/:id')
    .delete(deleteBook);

module.exports = router;