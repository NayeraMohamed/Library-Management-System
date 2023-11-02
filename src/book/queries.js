const getBooks = "SELECT * FROM books;";
const getBookByTitle = "SELECT * FROM books WHERE title = $1;";
const getBookByAuthor = "SELECT * FROM books WHERE author = $1;"
const getBookByIsbn = "SELECT * FROM books WHERE isbn = $1;"
const addBook = "INSERT INTO books (title, author, isbn, available_quantity, location) VALUES ($1, $2, $3, $4, $5);"
const deleteBook = "DELETE FROM books WHERE id = $1;"
const updateBook = "UPDATE books SET available_quantity = $1, location = $2 WHERE id = $3;"
const getBookQuantity = "SELECT available_quantity FROM books WHERE book_id = $1;"
const updateBookQuantity = "UPDATE books SET available_quantity = $1;"

module.exports = {
    getBooks,
    getBookByAuthor,
    getBookByIsbn,
    getBookByTitle,
    addBook,
    deleteBook,
    updateBook,
    getBookQuantity,
    updateBookQuantity
};