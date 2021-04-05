const api_key = require('./apiKey');
import axios from 'axios';

const yelp = axios.create({
  baseURL: 'https://api.yelp.com/v3/',
  headers: {
    Authorization: `Bearer ${api_key}`,
    'Content-type': 'application/json',
  },
});

module.export = {
  search: (req, res) => {
    yelp('/businesses/search', {
      params: {
        term: 'coffee',
        location: 'san francisco'
      },
    }).then(response => {
      console.log(response.data);
      res.send(200).send(response.data);
    }).catch(reject => {
      console.log('failed', reject);
    })
  }
}