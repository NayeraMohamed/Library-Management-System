const getOverdueLoans = "SELECT * FROM loans WHERE returned = FALSE AND due_date < NOW();";
const getBorrowerBooks = "SELECT title FROM books WHERE book_id = (SELECT book_id FROM loans WHERE returned = FALSE AND borrower_id = $2);"
const borrowBook = "INSERT INTO loans (book_id, borrower_id, due_date) VALUES ($1, $2, $3);"
const returnBook = "UPDATE loans SET returned = TRUE WHERE book_id = $1 AND borrower_id = $2;"

module.exports = {
    getBorrowerBooks,
    getOverdueLoans,
    borrowBook,
    returnBook
};