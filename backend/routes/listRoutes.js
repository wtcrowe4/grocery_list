const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');
const { protect } = require('../middleware/authMiddleware');

//Routes
//Create a new list
router.post('/create', protect, listController.create);
//Get all lists
router.get('/all', protect, listController.all);
//Get a list
router.get('/:id', protect, listController.get);
//Update a list
router.put('/:id', protect, listController.update);
//Delete a list
router.delete('/:id', protect, listController.deleteList);
//Add an item to a list
router.put('/addItem/:id', protect, listController.addItem);


module.exports = router;

