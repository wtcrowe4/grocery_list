const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;


//Database connection
mongoose.connect(mongoURI, () => console.log(`MongoDB connected at ${mongoURI}`));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/user', require('./routes/userRoutes'));


//Error Handling
app.use((err, req, res, next) => {  
    console.log(err);
    return res.send({errMsg: err.message});
});

//Server
app.listen(port, () => console.log(`Server running on port ${port}`));