const pool = require('../../db');
const queries = require('./queries')

const addBorrower = async (req, res, next) => {
    const { name, email, registeredDate } = req.body;
    try {
        await pool.query(queries.addBorrower, [name, email, registeredDate]);
        res.status(201).json({ message: "Borrower Created Successfully!" });
    } catch (err) {
        // If UNIQUE constraint is violated
        if (err.code == "23505") {
            console.error(err.message);
            //TODO: check which unique constraint exactly was violated
            res.status(409).json({ message: "Borrower already exists :: " + err.message });
            next(err);
        } else {
            console.error(err.message);
            res.status(500).json({ message: "Internal Server Error :: " + err.message });
            next(err);
        }
    }
};

const getBorrowers = (req, res, next) => {
    try {
        pool.query(queries.getBorrowers, (error, results) => {
            res.status(200).json(results.rows);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
}

const deleteBorrower = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await pool.query(queries.deleteBorrower, [id])
        res.status(200).send("Borrower deleted successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error :: " + err.message });
        next(err);
    }
};



module.exports = {
    getBorrowers,
    addBorrower,
    deleteBorrower
}