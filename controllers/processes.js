// const books = require('../data/books.json');
const Book = require('../model/Book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        books && res.status(200).json(books);
        !books && res.status(404).json({ message: "Not found!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}

exports.getABook = async (req, res) => {
    try {
        const id = req.params.id;
        const foundBook = await Book.findOne({ _id: id });
        foundBook && res.status(200).json(foundBook);
        !foundBook && res.status(404).json({ message: "Not Found!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}

exports.addBook = async (req, res) => {
    try {
        const books = await Book.find();
        const booksName = books.map(e => e.title.toLocaleLowerCase());
        if (booksName.includes(req.body.title.toLocaleLowerCase())) {
            res.status(409).json({ message: "Book already exists!" });
        }
        else {
            const newBook = new Book(req.body);
            await newBook.save();
            newBook && res.status(200).json(newBook);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Semething went wrong!", error });
    }
}

exports.editBook = async (req, res) => {
    try {
        const id = req.params.id;
        const boodUpdatedData = req.body;
        const updatedBook = await Book.findByIdAndUpdate({_id: id}, {
            $set: boodUpdatedData
        }, {new: true});
        updatedBook && res.status(200).json({ message: "Book Updated!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Semething went wrong!", error });
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findOne({_id: id});
        if(book){
            await Book.findByIdAndDelete({_id: id});
            res.status(200).json({ message: "Book Deleted!" });
        }
        else{
            res.status(404).json({message: "Not found!"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Semething went wrong!", error });
    }
}