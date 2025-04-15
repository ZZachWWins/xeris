// functions/deleteVideo.js
const mongoose = require('./db');
const cloudinary = require('cloudinary').v2;
const Video = require('./videos');

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: 'dwmnbrjtu',  // Replace with your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async (event, context) => {
  // Ensure the request is a POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  // Check if the user is an admin
  const { user } = context.clientContext;
  if (!user || !user.app_metadata.roles.includes('admin')) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }

  try {
    const { videoId } = JSON.parse(event.body);
    const video = await Video.findById(videoId);
    if (!video) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Video not found' }),
      };
    }

    // Delete the video from Cloudinary
    await cloudinary.uploader.destroy(video.publicId);

    // Delete the video from MongoDB
    await Video.findByIdAndDelete(videoId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Video deleted successfully' }),
    };
  } catch (error) {
    console.error('Delete error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Delete failed', error: error.message }),
    };
  }
};