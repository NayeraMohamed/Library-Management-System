const pool = require('../../db');
const queries = require('./queries')
const bookQueries = require('../book/queries')

const getBorrowerBooks = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        pool.query(queries.getBorrowerBooks,  [id], (error, results) => {
            res.status(200).json(results.rows);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
}

const getOverdueLoans = (req, res, next) => {
    try {
        pool.query(queries.getOverdueLoans, [date], (error, results) => {
            res.status(200).json(results.rows);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
}

// In progress
// TODO: create a transaction >> bookQueries.getBookQuantity
// if quantity = 0 >> return & rollback transaction
// if quantity > 0 >> queries.borrowBook >> bookQueries.updateBookQuantity (bookQueries.getBookQuantity - 1)
// Commit transaction

/*const borrowBook = async (req, res, next) => {
    try {
        await pool.query('BEGIN')
        await pool.query(bookQueries.getBookQuantity, [date], (error, results))
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
}*/

// In progress
// TODO: create a transaction >> bookQueries.getBookQuantity
// queries.returnBook
// bookQueries.updateBookQuantity (bookQueries.getBookQuantity + 1)
// Commit transaction

/*const returnBook = async (req, res, next) => {
    try {
        await pool.query('BEGIN')
        await pool.query(bookQueries.getBookQuantity, [date], (error, results))
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
}*/

module.exports = {
    getBorrowerBooks,
    getOverdueLoans
}