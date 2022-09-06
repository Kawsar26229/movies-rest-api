const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const registerController = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.json({
                error: err
            })
        }
        const user = new User({
            email: req.body.email,
            password: hash
        })
        user.save()
            .then(data => {
                res.status(201).json({
                    message: 'User Registered',
                    data
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'User Registration Failed',
                    error
                })
            })
    })
};

const loginController = (req, res, next) => {
    let { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.json({
                            message: 'Error Occured'
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ email: user.email, id: user._id }, 'SECRET', { expiresIn: '2h' });
                        res.json({
                            message: 'Login Successful',
                            token
                        })
                    } else {
                        res.json({
                            message: 'Login Failed. Password doesn\'t Match'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'User Not Found'
                })
            }
        })
        .catch(error => {
            res.json({
                error
            })
        })
};

const getUsersController = (req, res, next) => {
    User.find()
        .then(users => {
            res.json({
                users
            })
        })
        .catch(error => {
            res.json({
                error
            })
        })
};

module.exports = {
    registerController,
    loginController,
    getUsersController
}