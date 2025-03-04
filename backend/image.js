import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function generateImage(prompt, options) {
  const input = {
    prompt,
    aspect_ratio: options.aspect_ratio || '16:9',
    output_format: options.format || 'webp',
    output_quality: +options.quality || 100,
    safety_tolerance: 2,
    prompt_upsampling: true,
    // output_count: options.count || 1,
  };

  const output = await replicate.run('black-forest-labs/flux-schnell', {
    input,
  });
  const outputStream = output[0];

  const imageBlob = await outputStream.blob();
  const imageBuffer = await imageBlob.arrayBuffer();
  const image = Buffer.from(imageBuffer);

  return { image, format: imageBlob.type };
}
