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

//Routes
app.use('/user', require('./routes/userRoutes'));




//Server
app.listen(port, () => console.log(`Server running on port ${port}`));