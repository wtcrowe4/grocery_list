const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true
    }
},
{
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;



 
