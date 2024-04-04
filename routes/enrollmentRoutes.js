import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/authMiddleware.js';
import { enrollUserInCourse, getEnrolledCourses } from '../controllers/enrollmentController.js';

// Route for enrolling user in a course
router.post('/:courseId', authenticateToken, enrollUserInCourse);

// Route for retrieving enrolled courses for a user
router.get('/', authenticateToken, getEnrolledCourses);

export default router;
