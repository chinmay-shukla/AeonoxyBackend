// server.js

import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//Connecting to database
mongoose.connect(process.env.DB_CONNECTION).then(() => {

    console.log('Connected to Database');
    const port = process.env.PORT || 3000;

    //Start the server :)
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);

    });
})

    .catch((err) => console.error('Error connecting to MongoDB:', err));
