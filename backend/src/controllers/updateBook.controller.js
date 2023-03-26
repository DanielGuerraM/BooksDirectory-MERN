const updateBookController = {};

const Book = require("../models/books");

updateBookController.putBook = async (req, res) => {
  const { title, author, publishYear, nationality } = req.body;

  if (req.params.id.length !== 24) {
    res.status(400);
    res.json({ Mesagge: "Bad Request" });
  }

  await Book.findById(req.params.id)
    .then((book) => {
      if (!book) {
        res.json({ Message: "The book does not exist" });
      }

      const bookUpdated = {
        title,
        author,
        publishYear,
        nationality,
      };

      Book.findByIdAndUpdate(req.params.id, bookUpdated)
        .then(() => {
          res.json({
            Mesagge: "Book updated successfully",
            bookUpdated,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

module.exports = updateBookController;
