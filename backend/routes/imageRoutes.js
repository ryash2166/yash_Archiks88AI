import express from 'express';
import authMiddleware from '../config/authMiddleware.js';
import { generateImage, getGeneratedImages } from '../controllers/imageControllers.js';

const router = express.Router();

router.post('/generate-image', authMiddleware, generateImage);
router.get('/images', authMiddleware, getGeneratedImages);

export default router;