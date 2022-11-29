var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.BE_PORT || 8080;
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/GroceryList';
const cors = require('cors');
const nodemailer = require('nodemailer');
//const bodyParser = require('body-parser');
//Database connection
mongoose.connect(mongoURI, () => console.log(`MongoDB connected at ${mongoURI}`));
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//Root Route
app.get('/', (req, res) => {
    res.send('Backend Root Route');
});
//Routes
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/list', require('./routes/listRoutes'));
//Error Handling
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({ errMsg: err.message });
});
//Server
app.listen(port, () => console.log(`Server running on port ${port}`));
//Email Service
app.post('/send_mail', cors(), (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { email, item, subject } = req.body;
    // const transporter = nodemailer.createTransport({
    //     host: process.env.MAIL_HOST,
    //     post: process.env.BE_PORT,
    //     secure: false,
    //     auth: {
    //         user: process.env.MAIL_USER,
    //         pass: process.env.PASSWORD
    //     },
    //     tls: {
    //         rejectUnauthorized: false
    //     }
    // });
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        secure: false,
        auth: {
            user: "0cb5411844f59c",
            pass: "7623d64c38032c"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const list = item.map(item => {
        return (`<ul>
                    <li>${item.text}</li>
                </ul>`);
        // item.text;
    });
    const mailOptions = {
        from: 'myapp@gmail.com',
        to: email,
        subject: subject,
        html: `<h2>Here is your grocery list:</h2>
            
           ${list}`
    };
    yield transport.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.json({
                status: 'fail',
                message: err
            });
        }
        else {
            res.json({
                status: 'success',
                data: data
            });
        }
    });
}));
