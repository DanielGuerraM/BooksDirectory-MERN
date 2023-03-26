const bcrypt = require('bcrypt');
const loginController = {};

const User = require('../models/users');

loginController.postUser = async(req, res) => {
    const { email, password} = req.body;
    console.log(req.body);

    
    User.findOne({email})
    .then((user) => {
        if(!user){
            return res.json({ Message: 'The user does not exist or has not been confirmed'})
        }
        
        bcrypt.compare(password, user.password)
        .then((isCorrect) => {
            if(!isCorrect){
                return res.json({ Message: 'Incorrect password' })
            }

            res.json({
                user
            });
        })
    })
    .catch((err) =>{
        res.status(400).json(err)
    })
}

module.exports = loginController;