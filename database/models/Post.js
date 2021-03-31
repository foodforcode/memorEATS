const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
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
      function ()
        {return this.location.length > 0},
        'tell me where this is!'
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
      function() {return this.body.length > 0},
      'please enter more details to remember me by!'
    ]
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;