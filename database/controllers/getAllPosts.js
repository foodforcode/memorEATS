const Post = require('../models/Post.js');

const formatDate = (isoDate) => {
  let date = new Date(isoDate);
    let months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    }

    let month = (date.getMonth() + 1).toString();
    date = `${months[month]} ${date.getDate()}, ${date.getFullYear()}`;
    return date;
  }

const getAllPosts = (callback) => {
  Post.find({}).exec((err, results) => {
    if (err) {
      throw err;
    } else {
      console.log(results);
      results.forEach(result => {
        var formattedDate = formatDate(result.date.toString());
        result.date = formattedDate;
      })
      callback(null, results);
    }
  });
}

module.exports = getAllPosts;