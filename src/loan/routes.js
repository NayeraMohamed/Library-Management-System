const { Router } = require('express');
const controller = require('./controller');
const req = require('express/lib/request');
const router = Router();

//router.post('/add', controller.borrowBook);
//router.put('/remove', controller.returnBook);
router.get('/borrowers/:id', controller.getBorrowerBooks);
router.get('/overdue', controller.getOverdueLoans);

module.exports = router;