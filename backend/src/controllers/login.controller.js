const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

            const { id, names, lastname,userName } = user

            const UserData = {
                id,
                userName
            };
    
            const token = jwt.sign(UserData, 'Secret', {
                expiresIn: 3600
            });

            res.json({
                user: {
                    id,
                    names,
                    lastname,
                    userName,
                    token
                }
            });
        })
    })
    .catch((err) =>{
        res.status(400).json(err)
    })
}

module.exports = loginController;