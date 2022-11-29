var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const List = require('../models/listModel');
const asyncHandler = require('express-async-handler');
//Create a new list
const create = asyncHandler((req, res) => __awaiter(this, void 0, void 0, function* () {
    const { title, items, userId } = req.body;
    const list = yield List.create({
        title,
        items,
        userId
    });
    if (list) {
        res.status(201).json({
            _id: list._id,
            title: list.title,
            items: list.items,
            userId: list.userId
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid list data');
    }
}));
//Get all lists
const all = asyncHandler((req, res) => __awaiter(this, void 0, void 0, function* () {
    const lists = yield List.find({});
    res.json(lists);
}));
//Get a list
const get = asyncHandler((req, res) => __awaiter(this, void 0, void 0, function* () {
    const list = yield List.findById(req.params.id);
    if (list) {
        res.json(list);
    }
    else {
        res.status(404);
        throw new Error('List not found');
    }
}));
//Update a list
const update = asyncHandler((req, res) => __awaiter(this, void 0, void 0, function* () {
    const { title, items } = req.body;
    const list = yield List.findById(req.params.id);
    if (list) {
        list.title = title;
        list.items = items;
        const updatedList = yield list.save();
        res.json(updatedList);
    }
    else {
        res.status(404);
        throw new Error('List not found');
    }
}));
//Delete a list
const deleteList = asyncHandler((req, res) => __awaiter(this, void 0, void 0, function* () {
    const list = yield List.findById(req.params.id);
    if (list) {
        yield list.remove();
        res.json({ message: 'List removed' });
    }
    else {
        res.status(404);
        throw new Error('List not found');
    }
}));
//Add an item to a list
const addItem = asyncHandler((req, res) => __awaiter(this, void 0, void 0, function* () {
    const { item } = req.body;
    const list = yield List.findById(req.params.id);
    if (list) {
        list.items.push(item);
        const updatedList = yield list.save();
        res.json(updatedList);
    }
    else {
        res.status(404);
        throw new Error('List not found');
    }
}));
module.exports = {
    create,
    all,
    get,
    update,
    deleteList,
    addItem
};
