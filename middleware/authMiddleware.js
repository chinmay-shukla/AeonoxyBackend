import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Middleware function to authenticate JWT token

export const authenticateToken = (req, res, next) => {

    //Token Passed in headers of request by name authorization
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {

        //This will fetch user from the request and give for further accessing details and data of the user 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();

    } catch (error) {

        console.error('Error authenticating token:', error);
        res.status(401).json({ msg: 'Token is not valid' });

    }
};
