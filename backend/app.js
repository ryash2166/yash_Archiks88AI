// import express from 'express';
// import { generateImage } from './image.js';

// const app = express();
// app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.post('/generate-image', async (req, res) => {
//   const { prompt, options } = req.body; // options => aspect_ratio, format, quality

//   if (!prompt || prompt.trim().length === 0) {
//     return res.status(400).send({ error: 'Invalid prompt' });
//   }

//   const { image, format } = await generateImage(prompt, options);
//   res.type(format);
//   res.status(201).send(image);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import profileRoutes from './routes/profileRoutes.js';

dotenv.config();
const app = express();
app.use(express.json({ limit: '5mb'}));

// CORS Middleware
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/api', imageRoutes);
app.use('/api/profile', profileRoutes);

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});