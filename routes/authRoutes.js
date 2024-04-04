import express from 'express';

const router = express.Router();

import { authenticateToken } from '../middleware/authMiddleware.js';

import { loginUser } from '../controllers/authController.js';

// Route for user login
router.post('/login', loginUser);

export default router;
