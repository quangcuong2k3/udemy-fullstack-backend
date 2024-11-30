const express = require('express');
const router = express.Router();
const { getHomepage, getABC, postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser } = require('../controllers/homeController')

router.get('/', getHomepage);

router.get('/abc', getABC);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
module.exports = router;