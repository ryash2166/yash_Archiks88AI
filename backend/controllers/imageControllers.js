// import User from '../models/User.js';
// import Image from '../models/Image.js';
// import { generateImage as generateImageUtil } from '../image.js';

// export const generateImage = async (req, res) => {
//   const { prompt, options } = req.body;
//   const user = req.user;
//   const count = options?.count || 1;

//   const requiredCredits = 4 * count;
//   if (user.credits < requiredCredits) {
//         return res.status(400).json({ error: 'Insufficient credits' });
//       }

//   try {

//     const images = [];

//   //   const { image, format } = await generateImageUtil(prompt, options);

//   //   // Save image to database
//   //   const newImage = new Image({
//   //     user: user._id,
//   //     imageUrl: `data:${format};base64,${image.toString('base64')}`,
//   //     prompt,
//   //   });
//   //   await newImage.save();

//   //   // Deduct credits
//   //   // Update the user by pushing the new image ID into the images array and deducting credits atomically
//   //   await User.findByIdAndUpdate(
//   //     user._id,
//   //     { $push: { images: newImage._id }, $inc: { credits: -4 } },
//   //     { new: true }
//   //   );
//   //   await user.save();

//   //   res.type(format) && res.status(201).send(image) && res.status(201).json({
//   //     message: 'Image generated successfully',
//   //     imageUrl: newImage.imageUrl,
//   //     credits: user.credits,
//   //   });
//   // } catch (error) {
//   //   res.status(500).json({ error: 'Server error' });
//   // }

//    // Generate multiple images
//    for (let i = 0; i < count; i++) {
//     const { image, format } = await generateImageUtil(prompt, options);
    
//     const newImage = new Image({
//       user: user._id,
//       imageUrl: `data:${format};base64,${image.toString('base64')}`,
//       prompt,
//     });
    
//     await newImage.save();
//     images.push(newImage.imageUrl);

    
//     // Deduct credits for each image
//     await User.findByIdAndUpdate(
//       user._id,
//       { $push: { images: newImage._id }, $inc: { credits: -4 } },
//       { new: true }
//     );
//   }
//      res.status(201).json({
//       message: `${count} image(s) generated successfully`,
//       imageUrls: images,
//       credits: user.credits - (4 * count)
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// export const getGeneratedImages = async (req, res) => {
//   const user = req.user;

//   try {
//     const images = await Image.find({ user: user._id }).sort({ createdAt: -1 });
//     res.json(images);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };



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