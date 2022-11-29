"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
}, {
    timestamps: true
});
const User = mongoose_1.default.model('User', userSchema);
module.exports = User;
