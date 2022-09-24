const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

//Web Token
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '60d'
    });
};

//Register User
const register = asyncHandler(async (req, res) => {
    const { username, password, email } = req.body;
    if(!username || !password || !email) {
        res.status(400)
        throw new Error('Please enter all fields');
    }
    const userExists = await User.findOne({ email })
    if(userExists) {
        res.status(400)
        throw new Error('User already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        username,
        password: hashedPassword,
        email
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: signToken(user._id)
            
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data');
    }
});


//Login User 
const login = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            message : {
                msgBody: "Successfully logged in user",
                msgError: false
            },
            user: {
            _id: user._id,
            username: user.username,
            email: user.email,
            token: signToken(user._id)
            }
        });
    } else {
        res.status(401)
        throw new Error('Invalid username or password');
    }
});
    
    
    // User.findOne({ username: req.body.username }, (err, user) => {
    //     if (err) {
    //         res.status(500).json({
    //             message: {
    //                 msgBody: "Unable to login",
    //                 msgError: true
    //             }
    //         });
    //     } else if (!user) {
    //         res.status(404).json({
    //             message: {
    //                 msgBody: "Username not found",
    //                 msgError: true
    //             }
    //         });
    //     } else {
    //         if (req.body.password === user.password) {
    //             const token = jwt.sign(user.toObject(), process.env.SECRET);
    //             res.cookie('access_token', token, { httpOnly: true, sameSite: true });
    //             res.status(200).json({
    //                 isAuthenticated: true,
    //                 user: {
    //                     username: user.username
    //                 },
    //                 message: {
    //                     msgBody: "Successfully logged in",
    //                     msgError: false
    //                 }
    //             });
    //         } else {
    //             res.status(403).json({
    //                 message: {
    //                     msgBody: "Incorrect password",
    //                     msgError: true
    //                 }
    //             });
    //         }
    //     }
    // });

//User Profile
const profile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if(user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: signToken(user._id)
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});




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
    profile,
    logout,
    isAuthenticated
}

