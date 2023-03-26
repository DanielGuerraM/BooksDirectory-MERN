const bookController = {}

const Books = require('../models/books');

bookController.getAllBooks = async(req, res) => {
    await Books.find()
    .then(books => { res.json(books)})
    .catch(err => console.log(err));
}

bookController.getBookById = async(req, res) => {
    if(req.params.id.length !== 24){
        res.status(400);
        res.json({ Mesagge: 'Bad Request'});
    }
    const book = await Books.findById(req.params.id)
    .then(book => {
        if(!book){
            return res.json({ Message: 'The book does not exist' })
        }
        res.json({ book })
    })
    .catch(err => console.log(err));
}

module.exports = bookController;