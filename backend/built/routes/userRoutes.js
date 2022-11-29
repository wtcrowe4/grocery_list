"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
//Routes
//Create a new user
router.post('/register', userController.register);
//Login a user
router.post('/login', userController.login);
//Logout a user
router.get('/logout', userController.logout);
//Check if user is authenticated
router.get('/authenticated', userController.isAuthenticated);
//User profile
router.get('/me', protect, userController.profile);
module.exports = router;
