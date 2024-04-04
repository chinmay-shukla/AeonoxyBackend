import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/authMiddleware.js';
import { getCourses, createCourse, updateCourse, deleteCourse } from '../controllers/courseController.js';

// Route for fetching all courses
router.get('/', getCourses);

// Protected routes (requires authentication)**********************************

router.use(authenticateToken);
//for all the function below this authentiocation from user token and fetching of user from the token is required

// Route for creating a new course
router.post('/', createCourse);

// Route for updating a course
router.put('/:id', updateCourse);

// Route for deleting a course

router.delete('/:id', deleteCourse);

//*******************************************************************

export default router;
