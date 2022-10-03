//Email Service
const nodemailer = require('nodemailer');
const cors = require('cors');
const express = require('express');
const app = express();

const host = process.env.MAIL_HOST
const mail_port = process.env.MAIL_PORT
const user = process.env.MAIL_USER
const pass = process.env.MAIL_PASS

// app.post('/send_mail', cors(), async (req, res) => {
//     const { email, item , subject } = req.body;
//     const transport = nodemailer.createTransport({
//         host: host,
//         post: mail_port,
//         secure: false,
//         auth: {
//             user: user,
//             pass: pass 
//         },
//         tls: {
//             rejectUnauthorized: false
//         }

//     });

//     const list = item.map(item => {
//           return (  
//                 `<ul>
//                     <li>${item.text}</li>
//                 </ul>` )   
//            // item.text;
//         });

//     const mailOptions = {
//         from: 'myapp@gmail.com',
//         to: email,
//         subject: subject,
//         html: `<h2>Here is your grocery list:</h2>
            
//            ${list}`
//     };
//     await transport.sendMail(mailOptions, (err, data) => {
//         if(err) {
//             res.json({
//                 status: 'fail',
//                 message: err
//             });
//         } else {
//             res.json({
//                 status: 'success',
//                 data: data
//             });
//         }
//     });
// });