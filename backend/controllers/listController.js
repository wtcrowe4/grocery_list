const List = require('../models/listModel');
const asyncHandler = require('express-async-handler');

//Create a new list
const create = asyncHandler(async (req, res) => {
    const { title, content, userId } = req.body;
    const list = await List.create({
        title,
        content,
        userId
    });
    if(list) {
        res.status(201).json({
            _id: list._id,
            title: list.title,
            content: list.content,
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
    const { title, content } = req.body;
    const list = await List.findById(req.params.id);
    if(list) {
        list.title = title;
        list.content = content;
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


module.exports = {
    create,
    all,
    get,
    update,
    deleteList
};


