// import Image from '../models/Image.js';
// import User from '../models/User.js';
// import { generateImage as generateImageUtil } from '../image.js';

// export const generateImage = async (req, res) => {
//   const { prompt, options } = req.body;
//   const user = req.user;
//   const count = options?.count || 1;

//   // Validate credits
//   const requiredCredits = 4 * count;
//   if (user.credits < requiredCredits) {
//     return res.status(400).json({ error: 'Insufficient credits' });
//   }

//   try {
//     const images = [];

//     // Generate multiple images
//     for (let i = 0; i < count; i++) {
//       const { image, format } = await generateImageUtil(prompt, options);

//       // Save image to database
//       const newImage = new Image({
//         user: user._id,
//         imageUrl: `data:${format};base64,${image.toString('base64')}`,
//         prompt,
//       });
//       await newImage.save();

//       // Push image URL to the array
//       images.push(newImage.imageUrl);

//       // Deduct credits for each image
//       user.credits -= 4;
//       user.images.push(newImage._id);
//     }

//     // Save the updated user credits and images
//     await user.save();

//     res.status(201).json({
//       message: `${count} image(s) generated successfully`,
//       imageUrls: images,
//       credits: user.credits,
//     });

//   } catch (error) {
//     console.error('Error generating images:', error);
//     res.status(500).json({ error: 'Server error', details: error.message });
//   }
// };

// export const getGeneratedImages = async (req, res) => {
//   const user = req.user;

//   try {
//     const images = await Image.find({ user: user._id }).sort({ createdAt: -1 });
//     res.json(images);
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     res.status(500).json({ error: 'Server error', details: error.message });
//   }
// };

// export const deleteImage = async (req, res) => {
//   const { id } = req.params;
//   const user = req.user;

//   try {
//     // Find the image and check if it belongs to the user
//     const image = await Image.findById(id);
    
//     if (!image) {
//       return res.status(404).json({ error: 'Image not found' });
//     }
    
//     if (image.user.toString() !== user._id.toString()) {
//       return res.status(403).json({ error: 'Not authorized to delete this image' });
//     }

//     // Remove the image reference from the user's images array
//     await User.findByIdAndUpdate(user._id, {
//       $pull: { images: id }
//     });

//     // Delete the image
//     await Image.findByIdAndDelete(id);

//     res.json({ message: 'Image deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting image:', error);
//     res.status(500).json({ error: 'Server error', details: error.message });
//   }
// };


import Image from '../models/Image.js';
import User from '../models/User.js';
import { generateImage as generateImageUtil } from '../image.js';

export const generateImage = async (req, res) => {
  try {
    const { prompt, options = {} } = req.body;
    const user = req.user;
    const count = options.count || 1;
    const requiredCredits = 4 * count;

    // Validate credits
    if (user.credits < requiredCredits) {
      return res.status(400).json({ error: 'Insufficient credits' });
    }

    // Generate all images in parallel for better performance
    const imagePromises = Array(count).fill().map(async () => {
      const { image, format } = await generateImageUtil(prompt, options);
      
      // Create new image document
      const newImage = new Image({
        user: user._id,
        imageUrl: `data:${format};base64,${image.toString('base64')}`,
        prompt,
      });
      
      // Save and return new image
      await newImage.save();
      return newImage;
    });

    // Wait for all images to be generated and saved
    const newImages = await Promise.all(imagePromises);
    
    // Extract image URLs and IDs
    const imageUrls = newImages.map(img => img.imageUrl);
    const imageIds = newImages.map(img => img._id);
    
    // Update user in a single operation instead of multiple saves
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        $inc: { credits: -requiredCredits },
        $push: { images: { $each: imageIds } }
      },
      { new: true }
    );

    res.status(201).json({
      message: `${count} image(s) generated successfully`,
      imageUrls,
      credits: updatedUser.credits,
    });
  } catch (error) {
    console.error('Error generating images:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

export const getGeneratedImages = async (req, res) => {
  try {
    const images = await Image.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .lean(); // Use lean() for better performance when just reading data
      
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    
    // Find and verify image ownership in one operation
    const image = await Image.findOne({ _id: id, user: userId });
    
    if (!image) {
      return res.status(404).json({ 
        error: 'Image not found or not authorized to delete this image' 
      });
    }

    // Use Promise.all to run both operations concurrently
    await Promise.all([
      // Remove image reference from user document
      User.updateOne(
        { _id: userId },
        { $pull: { images: id } }
      ),
      // Delete the image document
      Image.deleteOne({ _id: id })
    ]);

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
}