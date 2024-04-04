import Course from '../models/Course.js';

// Controller for fetching all courses with filtering and pagination
export const getCourses = async (req, res) => {
    try {
        const { page = 1, limit = 10, category, level } = req.query;
        const filters = {};
        if (category) {
            filters.category = category;
        }
        if (level) {
            filters.level = level;
        }
        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
        };
        const courses = await Course.paginate(filters, options);
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};


// Controller for fetching all courses
// export const getCourses = async (req, res) => {
//     try {
//         const courses = await Course.find();
//         res.status(200).json(courses);
//     } catch (error) {
//         console.error('Error fetching courses:', error);
//         res.status(500).json({ msg: 'Server error' });
//     }
// };

// Controller for creating a new course
export const createCourse = async (req, res) => {
    try {
        const { title, description, level, category } = req.body;
        const course = new Course({ title, description, level, category });
        await course.save();
        res.status(201).json({ msg: 'Course created successfully' });
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Controller for updating a course
export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, level, category } = req.body;
        const course = await Course.findByIdAndUpdate(id, { title, description, level, category });
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }
        res.status(200).json({ msg: 'Course updated successfully' });
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Controller for deleting a course
export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' });
        }
        res.status(200).json({ msg: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ msg: 'Server error' });
    }
};
