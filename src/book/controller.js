const pool = require('../../db');
const queries = require('./queries')
const validator = require('express-validator');


const addBook = async (req, res, next) => {
    const { title, author, isbn, availableQuantity, location } = req.body;
    try {
        await pool.query(queries.addBook, [title, author, isbn, availableQuantity, location]);
        res.status(201).json({ message: "Book Created Successfully!" });
    } catch (err) {
        if (err.code == "23505") {
            console.error(err.message);
            //TODO: check which unique constraint exactly was violated
            res.status(409).json({ message: "Book already exists :: " + err.message });
            next(err);
        } else {
            console.error(err.message);
            res.status(500).json({ message: "Internal Server Error :: " + err.message });
            next(err);
        }
    }
};

const getBooks = (req, res, next) => {
    try {
        pool.query(queries.getBooks, (error, results) => {
            res.status(200).json(results.rows);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
}

const getBookByAuthor = (req, res, next) => {
    const author = req.params.author
    try {
        pool.query(queries.getBookByAuthor, [author], (error, results) => {
            res.status(200).json(results.rows);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
}

const getBookByTitle = (req, res, next) => {
    const title = req.params.title
    try {
        pool.query(queries.getBookByTitle, [title], (error, results) => {
            res.status(200).json(results.rows);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
}

const getBookByIsbn = async (req, res, next) => {
    const isbn = req.params.isbn
    try {
        pool.query(queries.getBookByIsbn, [isbn], (error, results) => {
            res.status(200).json(results.rows);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
}

const updateBook = (req, res, next) => {
    const id = parseInt(req.params.id);
    const { availableQuantity, location } = req.body;
    try {
        pool.query(queries.updateBook, [availableQuantity, location, id])
        res.status(200).send("Book updated successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
};

const deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    try {
        pool.query(queries.deleteBook, [id])
        res.status(200).send("Book deleted successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
};



module.exports = {
    getBooks,
    getBookByAuthor,
    getBookByIsbn,
    getBookByTitle,
    addBook,
    updateBook,
    deleteBook
}