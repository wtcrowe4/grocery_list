const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.BE_PORT || 8080;
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/GroceryList';
const cors = require('cors');
const nodemailer = require('nodemailer');


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
    
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    res.status(status).send(message);
    console.log(err);
});

//Server
app.listen(port, () => console.log(`Server running on port ${port}`));

//Email Service
const host = process.env.MAIL_HOST
const mail_port = process.env.MAIL_PORT
const user = process.env.MAIL_USER
const pass = process.env.MAIL_PASS

app.post('/send_mail', cors(), async (req, res) => {
    const { email, item , subject } = req.body;
    const transport = nodemailer.createTransport({
        host: host,
        post: mail_port,
        secure: false,
        auth: {
            user: user,
            pass: pass 
        },
        tls: {
            rejectUnauthorized: false
        }

    });

    const list = item.map(item => {
          return (  
                `<ul>
                    <li>${item.text}</li>
                </ul>` )   
           // item.text;
        });

    const mailOptions = {
        from: 'myapp@gmail.com',
        to: email,
        subject: subject,
        html: `<h2>Here is your grocery list:</h2>
            
           ${list}`
    };
    await transport.sendMail(mailOptions, (err, data) => {
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


