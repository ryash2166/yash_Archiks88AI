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
//     if (avatar && avatar.length > 2097152) { // ~2MB
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

import express from "express";
import authMiddleware from "../config/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

/**
 * Get user profile data
 * @route GET /profile
 * @access Private
 */
router.get("/", authMiddleware, async (req, res) => {
  try {
    // Use lean() for better performance with populated data
    const user = await User.findById(req.user._id)
      .select("-password")
      .populate("images")
      .lean();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

/**
 * Update user profile
 * @route PUT /profile
 * @access Private
 */
router.put("/", authMiddleware, async (req, res) => {
  try {
    const { name, bio, avatar } = req.body;
    const updateFields = {};

    // Only include defined fields in the update
    if (name !== undefined) {
      if (name.length > 20) {
        return res
          .status(400)
          .json({ error: "Name must be less than 20 characters" });
      }
      updateFields.name = name;
    }

    if (bio !== undefined) {
      if (bio.length > 200) {
        return res
          .status(400)
          .json({ error: "Bio must be less than 200 characters" });
      }
      updateFields.bio = bio;
    }

    if (avatar !== undefined) {
      if (avatar.length > 2097152) {
        // ~2MB
        return res.status(400).json({ error: "Avatar image too large" });
      }
      updateFields.avatar = avatar;
    }

    // Skip update if no valid fields provided
    if (Object.keys(updateFields).length === 0) {
      // Just return the basic profile without images
      const user = await User.findById(req.user._id).select(
        "-password -images"
      );
      return res.json(user);
    }

    // Update only the specified fields and return without populating images
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      updateFields,
      { new: true, runValidators: true }
    ).select("-password -images");

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return only the updated basic profile without images
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Failed to update profile" });
  }
});

export default router;
