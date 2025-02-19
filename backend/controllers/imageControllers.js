import User from '../models/User.js';
import Image from '../models/Image.js';
import { generateImage as generateImageUtil } from '../image.js';

export const generateImage = async (req, res) => {
  const { prompt, options } = req.body;
  const user = req.user;

  if (user.credits < 4) {
    return res.status(400).json({ error: 'Insufficient credits' });
  }

  try {
    const { image, format } = await generateImageUtil(prompt, options);

    // Save image to database
    const newImage = new Image({
      user: user._id,
      imageUrl: `data:${format};base64,${image.toString('base64')}`,
      prompt,
    });
    await newImage.save();

    // Deduct credits
    // Update the user by pushing the new image ID into the images array and deducting credits atomically
    await User.findByIdAndUpdate(
      user._id,
      { $push: { images: newImage._id }, $inc: { credits: -4 } },
      { new: true }
    );
    await user.save();

    res.type(format) && res.status(201).send(image) && res.status(201).json({
      message: 'Image generated successfully',
      imageUrl: newImage.imageUrl,
      credits: user.credits,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getGeneratedImages = async (req, res) => {
  const user = req.user;

  try {
    const images = await Image.find({ user: user._id }).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};