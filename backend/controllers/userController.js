const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register
const register = (req, res) => {
    const { username, password, email } = req.body;
    const newUser = new User({
        username,
        password,
        email
    });
    newUser.save((err, user) => {
        if (err) {
            res.status(500).json({
                message: {
                    msgBody: "Unable to add user",
                    msgError: true
                }
            });
        } else {
            res.status(201).json({
                message: {
                    msgBody: "Account successfully created",
                    msgError: false
                }
            });
        }
    });
}

//Login
const login = (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            res.status(500).json({
                message: {
                    msgBody: "Unable to login",
                    msgError: true
                }
            });
        } else if (!user) {
            res.status(404).json({
                message: {
                    msgBody: "Username not found",
                    msgError: true
                }
            });
        } else {
            if (req.body.password === user.password) {
                const token = jwt.sign(user.toObject(), process.env.SECRET);
                res.cookie('access_token', token, { httpOnly: true, sameSite: true });
                res.status(200).json({
                    isAuthenticated: true,
                    user: {
                        username: user.username
                    },
                    message: {
                        msgBody: "Successfully logged in",
                        msgError: false
                    }
                });
            } else {
                res.status(403).json({
                    message: {
                        msgBody: "Incorrect password",
                        msgError: true
                    }
                });
            }
        }
    });
}

//Logout
const logout = (req, res) => {
    res.clearCookie('access_token');
    res.json({
        user: {
            username: ""
        },
        success: true
    });
}

//Check if user is authenticated
const isAuthenticated = (req, res) => {
    if (req.cookies.access_token && req.isAuthenticated()) {
        const { username } = req.user;
        res.status(200).json({
            isAuthenticated: true,
            user: {
                username
            }
        });
    } else {
        res.status(403).json({
            isAuthenticated: false,
            user: {
                username: ""
            }
        });
    }
}

module.exports = {
    register,
    login,
    logout,
    isAuthenticated
}

