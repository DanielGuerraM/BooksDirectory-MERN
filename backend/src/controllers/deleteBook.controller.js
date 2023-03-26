const deleteBookController = {};

const Book = require("../models/books");

deleteBookController.deleteBook = async (req, res) => {
  if (req.params.id.length !== 24) {
    res.status(400);
    return res.json({ Mesagge: "Bad Request" });
  }

  await Book.findById(req.params.id)
  .then((book) => {
    if(!book){
        res.json({ Message: 'The book does not exist' })
    }

    Book.findOneAndDelete(req.params.id)
    .then(() => {
        res.json({  Message: `The book has been deleted` });
    })
    .catch(err => console.log(err));
  });
};

module.exports = deleteBookController;
