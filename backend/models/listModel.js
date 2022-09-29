const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        unique: true
    },
    items: {
        type: [{type: String}],
        
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
{
    timestamps: true
});


const List = mongoose.model('List', listSchema);

module.exports = List;