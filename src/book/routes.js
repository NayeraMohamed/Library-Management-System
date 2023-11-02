const { Router } = require('express');
const controller = require('./controller');
const req = require('express/lib/request');
const router = Router();

router.get('/', controller.getBooks);
router.post('/', controller.addBook);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.deleteBook);
router.get('/title/:title', controller.getBookByTitle);
router.get('/isbn/:isbn', controller.getBookByIsbn);
router.get('/author/:author', controller.getBookByAuthor);

module.exports = router;