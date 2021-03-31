const Post = require('../models/post.js');

const addNewPost = (data, callback) => {
  let entry = new Post({
    date: data.date,
    name: data.name,
    location: data.location || null,
    latitude: data.latidute || 0,
    longitude: data.longitude || 0,
    body: data.body
  })
  entry.save((err) => {
    if (err) {
      console.log(err)
      throw err;
    }
  });
}

module.exports = addNewPost;