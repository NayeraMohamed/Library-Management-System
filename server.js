const express = require('express');
const bodyParser = require('body-parser')
const bookRoutes = require('./src/book/routes')
const borrowerRoutes = require('./src/borrower/routes')
const loanRoutes = require('./src/loan/routes')

const app = express();
const port = 3000;

var listener = app.listen(port, function () {
    console.log('Listening on port ' + listener.address().port); //Listening on port 3000
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/books', bookRoutes)
app.use('/api/v1/borrowers', borrowerRoutes)
app.use('/api/v1/loans', loanRoutes)
