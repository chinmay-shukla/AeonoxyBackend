import User from '../models/User.js';


// Controller for user registration
export const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user
        user = new User({
            name,
            email,
            password,
        });

        // Save user to database
        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });

    } catch (error) {

        console.error('Error registering user:', error);
        res.status(500).json({ msg: 'Server error' });

    }
};


// Controller for updating user profile

export const updateUserProfile = async (req, res) => {
    try {

        const { name, email } = req.body;

        const userId = req.user.id; // Assuming user ID is available in request object after authentication

        // Update user profile
        await User.findByIdAndUpdate(userId, { name, email });
        res.status(200).json({ msg: 'User profile updated successfully' });

    } catch (error) {

        console.error('Error updating user profile:', error);
        res.status(500).json({ msg: 'Server error' });

    }
    
};
