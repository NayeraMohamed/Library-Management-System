const { Router } = require('express');
const controller = require('./controller');
const req = require('express/lib/request');
const router = Router();

router.get('/', controller.getBorrowers);
router.post('/', controller.addBorrower);
router.delete('/:id', controller.deleteBorrower);

module.exports = router;