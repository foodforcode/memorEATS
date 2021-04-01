const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const db = require('../database/');
const addNewPost = require('../database/controllers/addNewPost.js');
const getAllPosts = require('../database/controllers/getAllPosts.js');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/posts', (req, res) => {
  getAllPosts((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(data);
    }
  });
});


app.post('/post', (req, res) => {
  addNewPost(req.body, (err, data) => {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
      res.status(201).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Snacking on port ${PORT}...`);
});