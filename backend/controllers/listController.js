const List = require('../models/listModel');
const asyncHandler = require('express-async-handler');

//Create a new list
const create = asyncHandler(async (req, res) => {
    const { title, items, userId } = req.body;
    const list = await List.create({
        title,
        items,
        userId
    });
    if(list) {
        res.status(201).json({
            _id: list._id,
            title: list.title,
            items: list.items,
            userId: list.userId
        })
    } else {
        res.status(400)
        throw new Error('Invalid list data');
    }
});

//Get all lists
const all = asyncHandler(async (req, res) => {
    const lists = await List.find({});
    res.json(lists);
});

//Get a list
const get = asyncHandler(async (req, res) => {
    const list = await List.findById(req.params.id);
    if(list) {
        res.json(list);
    } else {
        res.status(404);
        throw new Error('List not found');
    }
});

//Update a list
const update = asyncHandler(async (req, res) => {
    const { title, items } = req.body;
    const list = await List.findById(req.params.id);
    if(list) {
        list.title = title;
        list.items = items;
        const updatedList = await list.save();
        res.json(updatedList);
    } else {
        res.status(404);
        throw new Error('List not found');
    }
});

//Delete a list
const deleteList = asyncHandler(async (req, res) => {
    const list = await List.findById(req.params.id);
    if(list) {
        await list.remove();
        res.json({message: 'List removed'});
    } else {
        res.status(404);
        throw new Error('List not found');
    }
});

//Add an item to a list
const addItem = asyncHandler(async (req, res) => {
    const { item } = req.body;
    const list = await List.findById(req.params.id);
    if(list) {
        list.items.push(item);
        const updatedList = await list.save();
        res.json(updatedList);
    } else {
        res.status(404);
        throw new Error('List not found');
    }
});



module.exports = {
    create,
    all,
    get,
    update,
    deleteList,
    addItem
};


