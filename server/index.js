const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const db = require('../database/');
const addNewPost = require('../database/controllers/addNewPost.js');
const getAllPosts = require('../database/controllers/getAllPosts.js');
const axios = require('axios');

// const yelp = require('yelp-fusion');
// const client = yelp.client('-POedabaug99DfQdW7h7XJHrtSlpXcpTCZ4BJGOdPjh84iYX0d58Ml84cCFJ4eol10Tqq41ZrsD78rpF8ZzuNtDJg1EHUOKxRi3WWCOKuEC4SLsJ3Np76nkg2DppX3Yx');


const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist/')));

// client.search({
//   term: 'coffee',
//   location: 'san francisco, ca',
// })
// .then(response => {
//   console.log(client.search.toString());
//   console.log(response.jsonBody.businesses[0].name)})
// .catch(reject => {
//   console.log(reject, 'failed');
// })


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