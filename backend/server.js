const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.BE_PORT || 8080;
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const cors = require('cors');

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