import express from 'express';
import { signup, login, resetPassword, checkEmailExists } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/check-email', checkEmailExists);
router.put('/reset-password', resetPassword);
export default router;