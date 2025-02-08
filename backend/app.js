import express from 'express';
import { generateImage } from './image.js';

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/generate-image', async (req, res) => {
  const { prompt, options } = req.body; // options => aspect_ratio, format, quality

  if (!prompt || prompt.trim().length === 0) {
    return res.status(400).send({ error: 'Invalid prompt' });
  }

  const { image, format } = await generateImage(prompt, options);
  res.type(format);
  res.status(201).send(image);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
