import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'vetrenarysite',
  api_key: '381952464327972',
  api_secret: process.env.SECRET_CLOUDINARY_KEY
});

export default cloudinary;