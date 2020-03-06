const userRoutes = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../keys');

userRoutes.route('/add').post((req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json("All fields must be entered.")
    }

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json("A user with that email already exists.");

            const newUser = new User({
                name,
                email,
                password
            });

            bcrypt.genSalt((err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                {id: user.id},
                                keys.secret,
                                {expiresIn: 3600},
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email,
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        });
});


module.exports = userRoutes;