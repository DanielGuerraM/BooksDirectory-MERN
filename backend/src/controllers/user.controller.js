const bcrypt = require('bcrypt');
const userController = {};


const User = require('../models/users');

userController.getUsers = async(req, res) => {
    const user = await User.find();
    res.json(user);
}

userController.getUser = async(req, res) => {
    const user = await User.findById(req.params.id)
    .then((user) => {
        if(!user){
            res.json({ Message: 'The user does not exist or has not been confirmed' })
        }
        res.json({user})
    })
    .catch(err => console.log(err));
}



module.exports = userController;