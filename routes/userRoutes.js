import express from 'express';

const router = express.Router();

import { registerUser, updateUserProfile } from '../controllers/userController.js';

// Route for user registration
router.post('/register', registerUser);

// Route for updating user profile
router.put('/profile', updateUserProfile);

export default router;
