# Library-Management-System

LMS used in keeping book records, borrower details, managing loans/ borrowing processes. There are various problems also faced by the borrower in library such as finding any particular book, information whether book is available or not, listing all books, searching of books using ISBN number etc. As well as facilitating the borrowing process and keeping track of it. To help in this, Library Management System has been developed

## Prerequisites
NodeJS: https://nodejs.org/en/download

PostgreSQL: https://www.postgresql.org/download/ (I used Docker to run psql container instead)

## Installation

```bash
npm-install-all
```
Run the database initialization script (initDb.sql) to create the database table

## Running the application

```bash
node ./server.js
```
Server then starts and listens on port 3000

## Database Schema
![alt text](./Schema%20Diagram.png)

## Core Features

### Book
- Get all books: [GET] /api/v1/books
- Get book by title: [GET] /api/v1/books/title/:title
- Get book by ISBN: [GET] /api/v1/books/isbn/:isbn
- Get book by author: [GET] /api/v1/books/author/:author
- Delete a book by ID: [DELETE] /api/v1/books/:id
- Update a book by ID: [PUT] /api/v1/books/:id
  - Sample body
  ```bash
  {
    "availableQuantity": 3,
    "location": "far",
  }
  ```

- Add a book: [POST] /api/v1/books
  - Sample body
  ```bash
  {
    "title": "pride",
    "author": "jane",
    "availableQuantity": 3,
    "location": "far",
    "isbn":"aero"
  }
  ```

### Borrower 

- Get all borrowers: [GET] /api/v1/borrowers
- Delete a borrower by ID: [DELETE] /api/v1/borrowers/:id
- Add a borrower: [POST] /api/v1/borrowers
  - Sample body
  ```bash
  {
    "email": "pride",
    "name": "jane",
    "registeredDate": "1-2-1234"
  }
  ```

### Loan

- Get overdue loans: [GET] /api/v1/loans/overdue
- Get books currently borrowed by a specific borrower: [GET] /api/v1//borrowers/:id

## In Progress
- [In Progress] Borrow a Book: [POST] /api/v1/loans/add
  - Sample body
  ```bash
  {
    "book_id": 1,
    "borrower_id": 1,
    "due_date" : "1-2-1234"
  }
  ```
- [In Progress] Return a Book: [PUT] /api/v1/loans/remove
  - Sample body
  ```bash
  {
    "book_id": 1,
    "borrower_id": 1
  }
  ```
- Input Validation
- Swagger Genereation 
