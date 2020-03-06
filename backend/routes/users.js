const userRoutes = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');

userRoutes.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

userRoutes.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

userRoutes.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

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
                            res.json({
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                }
                            })
                        })
                })
            })



        });
});


module.exports = userRoutes;