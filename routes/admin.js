const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const bookStoreController = require('../controllers/bookstore');
const router = express.Router();

router.get('/add-book', adminController.getAddBook);
router.post('/add-book', adminController.postAddBook);
router.get('/books', adminController.getBooks);
router.get('/', bookStoreController.getBooks);
module.exports = router;