//user route

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.post('/register', userController.register);
// router.post('/login', userController.login);
// router.get('/logout', userController.logout);
// router.get('/authenticated', userController.isAuthenticated);

router.get('/' , (req, res) => {
    res.json({ message: 'User Index Route'})
});


module.exports = router;

