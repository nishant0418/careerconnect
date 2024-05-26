const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your account credentials
cloudinary.config({
  cloud_name: 'dqk0joznz',
  api_key: '523255686376518',
  api_secret: 'loGcXDD6JUW4NL9UxAz1POIalWE'
});

// Upload the image to Cloudinary
cloudinary.uploader.upload('C:/Users/Shubh/MERN-Stack-Job-Seeking-Web-Application/frontend/public/CVs/cv4.jpg', 
  { resource_type: "image" }, 
  (error, result) => {
    if (error) {
      console.error('Error uploading image to Cloudinary:', error);
    } else {
      console.log('Image uploaded to Cloudinary successfully:', result);
      const imageUrl = result.secure_url;
      const publicId = result.public_id;
      console.log('Image URL:', imageUrl);
      console.log('Public ID:', publicId);
    }
});
