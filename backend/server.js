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
    return res.send({errMsg: err.message});
});

//Server
app.listen(port, () => console.log(`Server running on port ${port}`));

//Email Service
app.post('/send_mail', cors(), async (req, res) => {
    const { email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        post: process.env.BE_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.PASSWORD
        }
    });
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: subject,
        html: `<h2>Here is your list:</h2>
            <p>${message}</p>`
    };
    await transporter.sendMail(mailOptions, (err, data) => {
        if(err) {
            res.json({
                status: 'fail',
                message: err
            });
        } else {
            res.json({
                status: 'success',
                data: data
            });
        }
    });
});


