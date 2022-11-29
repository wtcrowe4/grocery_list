"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const listSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    items: {
        type: [{ type: String }],
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});
const List = mongoose_1.default.model('List', listSchema);
module.exports = List;
