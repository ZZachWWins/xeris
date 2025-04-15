const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Video = mongoose.model('Video', new mongoose.Schema({
  title: String,
  description: String,
  fileUrl: String,
  thumbnailUrl: String,
  uploadedBy: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 }, // Add likes counter
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Track who liked
  createdAt: { type: Date, default: Date.now },
}));

exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    try {
      const videos = await Video.find().sort({ createdAt: -1 });
      return {
        statusCode: 200,
        body: JSON.stringify(videos),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch videos' }),
      };
    }
  }

  if (event.httpMethod === 'POST') {
    try {
      const data = JSON.parse(event.body);
      const video = new Video({
        ...data,
        views: 0, // Explicitly set defaults
        likes: 0,
        likedBy: [],
      });
      await video.save();
      return {
        statusCode: 200,
        body: JSON.stringify(video),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to save video' }),
      };
    }
  }

  if (event.httpMethod === 'PUT') {
    try {
      const { id, userId, action } = JSON.parse(event.body);
      if (!id) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Video ID required' }),
        };
      }

      const video = await Video.findById(id);
      if (!video) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Video not found' }),
        };
      }

      if (action === 'like') {
        if (!userId) {
          return {
            statusCode: 400,
            body: JSON.stringify({ error: 'User ID required for liking' }),
          };
        }
        if (video.likedBy.includes(userId)) {
          return {
            statusCode: 403,
            body: JSON.stringify({ error: 'You already liked this video' }),
          };
        }
        video.likes += 1;
        video.likedBy.push(userId);
      } else {
        // Default to incrementing views
        video.views += 1;
      }

      await video.save();
      return {
        statusCode: 200,
        body: JSON.stringify(video),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to update video' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' }),
  };
};