const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rsvp', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('database connected!');
});

module.exports = db;