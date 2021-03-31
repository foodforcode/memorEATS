const Post = require('../models/Post.js');

const getAllPosts = (req, res) => {
  var results = Post.find({});
  res.send(results);
}

module.exports = getAllPosts;