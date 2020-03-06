const userRoutes = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../keys');

userRoutes.route('/').post((req, res) => {
    const { name, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json("All fields must be entered.")
    }

    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json("invalid username or password.");

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json("invalid username or password.");

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
        });
});


module.exports = userRoutes;