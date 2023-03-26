const addBookController = {}

const Book = require('../models/books');

addBookController.postBook = async(req, res) => {
    const { title, author, publishYear, nationality } = req.body;

    Book.findOne({title})
    .then((book) => {
        if(book){
            return res.json({ Message: `The book ${title} is already registered` });
        }
        else if(!title || !author || !publishYear || !nationality){
            console.log(req.body);
            return res.json({ Message: 'All fields are required' })
        }
        else{
            console.log(req.body);
            const newBook = new Book({
                title: title,
                author: author,
                publishYear: publishYear,
                nationality: nationality
            });

            newBook.save()
            .then(() => {
                res.json({ newBook })
            })
            .catch(err => console.log(err));
        }
    })
}

module.exports = addBookController;