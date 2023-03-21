const express = require('express');
const router = express.Router();

const {getUsers, getUser} = require('../controllers/user.controller');
const { postUsers } = require('../controllers/register.controller');
const { postUser } = require('../controllers/login.controller');


router.route('/')
    .post(postUser)

router.route('/register')
    .post(postUsers)

router.route('/:id')
    .get(getUser)

module.exports = router;