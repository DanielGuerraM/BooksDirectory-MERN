const express = require('express');
const router = express.Router();

const { getUsers, getUser } = require('../controllers/user.controller');
const { postUsers } = require('../controllers/register.controller');
const { postUser } = require('../controllers/login.controller');
const veryfyToken = require('../middlewares/veryfyTokens');


// router.route('/')
//     .get(getUsers);

router.route('/login')
    .post(postUser)

router.route('/register')
    .post(postUsers)

router.route('/')
    .get(veryfyToken, getUser)

module.exports = router;