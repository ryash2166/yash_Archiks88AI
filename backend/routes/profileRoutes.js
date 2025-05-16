import express from 'express';
import authMiddleware from '../config/authMiddleware.js';
import User from '../models/User.js';

const router = express.Router();

// Get profile data
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select('-password')
      .populate('images');
    res.json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Update profile
router.put('/', authMiddleware, async (req, res) => {
  try {
    const { name, bio, avatar } = req.body;
    
    // Validation
    if (name && name.length > 20) {
      return res.status(400).json({ error: 'Name must be less than 20 characters' });
    }
    if (bio && bio.length > 200) {
      return res.status(400).json({ error: 'Bio must be less than 200 characters' });
    }
    if (avatar && avatar.length > 2 * 1024 *1024) { // ~2MB
      return res.status(400).json({ error: 'Avatar image too large' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, bio, avatar },
      { new: true, runValidators: true }
    ).select('-password');

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

export default router;