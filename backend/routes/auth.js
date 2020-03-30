const userRoutes = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../keys');
const auth = require('../mid/auth')

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

userRoutes.route('/user').get(auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})

//REMOVE AFTER TESTING
userRoutes.route('/').get( (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = userRoutes;