const Post = require('../models/Post.js');

const getAllPosts = (callback) => {
  Post.find({}).exec((err, results) => {
    if (err) {
      throw err;
    } else {
      callback(null, results);;
    }
  });
}

module.exports = getAllPosts;