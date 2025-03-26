import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import exploreRoutes from './routes/exploreRoutes.js';

dotenv.config();
const app = express();
app.use(express.json({ limit: '5mb'}));

// CORS Middleware
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/api', imageRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api', exploreRoutes); // Add this line - important!

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});