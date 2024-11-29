const express = require('express');
const router = express.Router();
const { getHomepage, getABC, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeController')

router.get('/', getHomepage);

router.get('/abc', getABC);
router.get('/create', getCreatePage);
router.get('/update/:cuongne', getUpdatePage);
router.post('/create-user', postCreateUser);

module.exports = router;