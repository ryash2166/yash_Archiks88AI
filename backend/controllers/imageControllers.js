import Image from '../models/Image.js';
import User from '../models/User.js';
import { generateImage as generateImageUtil } from '../image.js';

export const generateImage = async (req, res) => {
  const { prompt, options } = req.body;
  const user = req.user;
  const count = options?.count || 1;

  // Validate credits
  const requiredCredits = 4 * count;
  if (user.credits < requiredCredits) {
    return res.status(400).json({ error: 'Insufficient credits' });
  }

  try {
    const images = [];

    // Generate multiple images
    for (let i = 0; i < count; i++) {
      const { image, format } = await generateImageUtil(prompt, options);

      // Save image to database
      const newImage = new Image({
        user: user._id,
        imageUrl: `data:${format};base64,${image.toString('base64')}`,
        prompt,
      });
      await newImage.save();

      // Push image URL to the array
      images.push(newImage.imageUrl);

      // Deduct credits for each image
      user.credits -= 4;
      user.images.push(newImage._id);
    }

    // Save the updated user credits and images
    await user.save();

    res.status(201).json({
      message: `${count} image(s) generated successfully`,
      imageUrls: images,
      credits: user.credits,
    });

  } catch (error) {
    console.error('Error generating images:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

export const getGeneratedImages = async (req, res) => {
  const user = req.user;

  try {
    const images = await Image.find({ user: user._id }).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

export const deleteImage = async (req, res) => {
  const { id } = req.params;
  const user = req.user;

  try {
    // Find the image and check if it belongs to the user
    const image = await Image.findById(id);
    
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    
    if (image.user.toString() !== user._id.toString()) {
      return res.status(403).json({ error: 'Not authorized to delete this image' });
    }

    // Remove the image reference from the user's images array
    await User.findByIdAndUpdate(user._id, {
      $pull: { images: id }
    });

    // Delete the image
    await Image.findByIdAndDelete(id);

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};