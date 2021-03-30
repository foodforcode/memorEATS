const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist/')));

// app.get('/*', (req, res) => {
//   res.send('hello world');
// });

app.listen(PORT, () => {
  console.log(`Snacking on port ${PORT}...`);
});