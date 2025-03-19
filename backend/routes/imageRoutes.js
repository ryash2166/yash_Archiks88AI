import express from 'express';
import authMiddleware from '../config/authMiddleware.js';
import { deleteImage, generateImage, getGeneratedImages } from '../controllers/imageControllers.js';

const router = express.Router();

router.post('/generate-image', authMiddleware, generateImage);
router.get('/images', authMiddleware, getGeneratedImages);
router.delete('/images/:id', authMiddleware, deleteImage)
export default router;