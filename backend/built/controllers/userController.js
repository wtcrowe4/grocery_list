"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//Web Token
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '60d'
    });
};
//Register User
const register = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        res.status(400);
        throw new Error('Please enter all fields');
    }
    //Something is wrong here
    const emailExists = yield User.findOne({ email });
    const usernameExists = yield User.findOne({ username });
    if (usernameExists || emailExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const salt = yield bcrypt.genSalt(10);
    const hashedPassword = yield bcrypt.hash(password, salt);
    const user = yield User.create({
        username,
        password: hashedPassword,
        email
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: signToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
}));
//Login User 
const login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User.findOne({ email });
    if (user && (yield bcrypt.compare(password, user.password))) {
        res.json({
            // message : {
            //     msgBody: "Successfully logged in user",
            //     msgError: false
            // },
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                token: signToken(user._id)
            }
        });
    }
    else {
        res.status(401);
        throw new Error('Invalid username or password');
    }
}));
//User Profile
// const profile = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);
//     if(user) {
//         res.status(200).json(req.user);
//     } else {
//         res.status(404);
//         throw new Error('User not found');
//     }
// });
//Logout
const logout = (req, res) => {
    res.clearCookie('access_token');
    res.json({
        // message : {
        //     msgBody: "Successfully logged out user",
        //     msgError: false
        // },
        user: {
            username: ""
        },
        success: true
    });
};
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
    }
    else {
        res.status(403).json({
            isAuthenticated: false,
            user: {
                username: ""
            }
        });
    }
};
module.exports = {
    register,
    login,
    //profile,
    logout,
    isAuthenticated
};
