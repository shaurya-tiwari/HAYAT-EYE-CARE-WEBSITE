import cloudinary from './lib/cloudinaryConfig';

async function run() {
  try {
    const res = await cloudinary.api.resources({ type: 'upload', max_results: 100 });
    console.log(res.resources.map(r => r.public_id).join('\n'));
  } catch (error) {
    console.error(error);
  }
}

run();
