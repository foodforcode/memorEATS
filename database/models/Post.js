const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [
      () => this.length < 0,
      'when did you go?'
    ]
  },
  name: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  latitude: {
    type: Number,
    min: -90,
    max: 90
  },
  longitude: {
    type: Number,
    min: -180,
    max: 180
  },
  image: {
    type: String,
    trim: true
  },
  body: {
    type: String,
    trim: true,
  }
});

// let Post = mongoose.model('Post', postSchema);

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);

// module.exports = Post;