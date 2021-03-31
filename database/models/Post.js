const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [
      () => this.date.length < 0,
      'when did you go?'
    ]
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  location: {
    type: String,
    trim: true,
    required: [
      () => this.location.length < 0,
      'where is it?'
    ],
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
  body: {
    type: String,
    trim: true,
    required: [
      () => this.body.length < 0,
      'tell me more!'
    ]
  }
});

// let Post = mongoose.model('Post', postSchema);

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);

// module.exports = Post;