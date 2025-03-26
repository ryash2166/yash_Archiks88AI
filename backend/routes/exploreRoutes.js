import express from 'express';
// import authMiddleware from '../config/authMiddleware.js';
import Image from '../models/Image.js';

const router = express.Router();

router.get('/explore/media', async (req, res) => {
  try {
    // Fetch recent images from all users, sorted by creation date
    const mediaItems = await Image.find()
      .sort({ createdAt: -1 })
      .limit(50)
      .populate({
        path: 'user',
        model: 'User',
        select: 'name avatar' // Only select name and avatar
      });

    // Transform images to include more context
    const transformedMedia = mediaItems.map(item => ({
      _id: item._id,
      imageUrl: item.imageUrl,
      prompt: item.prompt,
      createdAt: item.createdAt,
      user: {
        name: item.user?.name || 'Anonymous',
        avatar: item.user?.avatar || '/default-avatar.png'
      }
    }));

    res.json(transformedMedia);
  } catch (error) {
    console.error('Explore media fetch error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch explore media', 
      details: error.message 
    });
  }
});

// // Route to get user's own generated media
// router.get('/my-media', authMiddleware, async (req, res) => {
//   try {
//     const userId = req.user._id;

//     // Fetch user's generated images
//     const userMedia = await Image.find({ user: userId })
//       .sort({ createdAt: -1 })
//       // .limit(50);

//     res.json(userMedia);
//   } catch (error) {
//     console.error('Error fetching user media:', error);
//     res.status(500).json({ 
//       error: 'Failed to fetch user media', 
//       details: error.message 
//     });
//   }
// });

export default router;