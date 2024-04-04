// app.js

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {errorHandler} from './middleware/errorMiddleware.js';
import {requestLogger} from './middleware/loggingMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import authRoutes from './routes/authRoutes.js';
import enrollmentRoutes from './routes/enrollmentRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Apply logging middleware
app.use(requestLogger);

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/enrollment', enrollmentRoutes)

// Apply error handling middleware
app.use(errorHandler);

export default app;
