// import express from 'express';
// import authMiddleware from '../config/authMiddleware.js';
// import User from '../models/User.js';

// const router = express.Router();

// // Get profile data
// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id)
//       .select('-password')
//       .populate('images');
//     res.json(user);
//   } catch (error) {
//     console.error("Error fetching profile:", error);
//     res.status(500).json({ error: 'Failed to fetch profile' });
//   }
// });

// // Update profile
// router.put('/', authMiddleware, async (req, res) => {
//   try {
//     const { name, bio, avatar } = req.body;
    
//     // Validation
//     if (name && name.length > 20) {
//       return res.status(400).json({ error: 'Name must be less than 20 characters' });
//     }
//     if (bio && bio.length > 200) {
//       return res.status(400).json({ error: 'Bio must be less than 200 characters' });
//     }
//     if (avatar && avatar.length > 5242880) { // ~5MB
//       return res.status(400).json({ error: 'Avatar image too large' });
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       req.user._id,
//       { name, bio, avatar },
//       { new: true, runValidators: true }
//     ).select('-password');

//     res.json(updatedUser);
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     res.status(500).json({ error: 'Failed to update profile' });
//   }
// });

// export default router;


import express from 'express';
import authMiddleware from '../config/authMiddleware.js';
import User from '../models/User.js';

const router = express.Router();

// Get basic profile data (for navbar/initial load)
router.get('/basic', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select('name bio avatar credits -_id');
    res.json(user);
  } catch (error) {
    console.error("Error fetching basic profile:", error);
    res.status(500).json({ error: 'Failed to fetch basic profile' });
  }
});

// Get paginated images for profile page
router.get('/images', authMiddleware, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;
    
    const user = await User.findById(req.user._id)
      .select('images')
      .populate({
        path: 'images',
        options: {
          sort: { createdAt: -1 },
          skip: skip,
          limit: limit
        }
      });
    
    // Get total count for pagination
    const totalImages = await User.findById(req.user._id)
      .select('images')
      .then(user => user.images.length);
    
    res.json({
      images: user.images,
      currentPage: page,
      totalPages: Math.ceil(totalImages / limit),
      hasMore: skip + limit < totalImages
    });
  } catch (error) {
    console.error("Error fetching profile images:", error);
    res.status(500).json({ error: 'Failed to fetch profile images' });
  }
});

// Get full profile data (less frequently needed)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select('-password')
      .populate({
        path: 'images',
        options: { 
          sort: { createdAt: -1 },
          limit: 12 // Initial limit
        }
      });
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
    if (avatar && avatar.length > 5242880) { // ~5MB
      return res.status(400).json({ error: 'Avatar image too large' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, bio, avatar },
      { new: true, runValidators: true }
    ).select('name bio avatar credits');

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

export default router;