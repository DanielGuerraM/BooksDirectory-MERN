const bcrypt = require('bcrypt');
const registerController = {};


const User = require('../models/users');

registerController.postUsers = async (req, res) => {
    const { names, lastname, email, userName, password, date } = req.body;
    
    User.findOne({email})
    .then((user) => {
        if(user){
            return res.json({Message: `The email ${email} is already registered`});
        }
        else if(!names || !lastname || !email || !userName || !password){
            console.log(req.body);
            return res.json({Message: 'All fields are required'});
        }
        else{
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if(err) res.json({err});
                else{
                    const newUser = new User({
                        names: names,
                        lastname: lastname,
                        userName: userName,
                        email: email,
                        password: hashedPassword,
                        date: date
                    });
                
                    newUser.save()
                    .then((user) => {
                        res.json({
                            newUser
                        });
                    })
                    .catch(err => console.log(err));
                }
            })
            
        }
    })
}

module.exports = registerController;