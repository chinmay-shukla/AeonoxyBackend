import User from '../models/User.js';
import Course from '../models/Course.js';

// Controller for enrolling user in a course
export const enrollUserInCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const userId = req.user.id; // Assuming user ID is available in request object after authentication
        // Check if user is already enrolled in the course
        const user = await User.findById(userId);
        if (user.enrolledCourses.includes(courseId)) {
            return res.status(400).json({ msg: 'User is already enrolled in this course' });
        }
        // Add course to user's enrolledCourses array
        user.enrolledCourses.push(courseId);
        await user.save();
        res.status(200).json({ msg: 'User enrolled in course successfully' });
    } catch (error) {
        console.error('Error enrolling user in course:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Controller for retrieving enrolled courses for a user
export const getEnrolledCourses = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is available in request object after authentication
        const user = await User.findById(userId).populate('enrolledCourses');
        res.status(200).json(user.enrolledCourses);
    } catch (error) {
        console.error('Error fetching enrolled courses:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};
