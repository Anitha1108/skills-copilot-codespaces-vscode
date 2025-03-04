// Create web server
const express = require('express');
const app = express();

// Create a simple web server
app.get('/', (req, res) => {
  res.send('Hello, Express.js');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server
// $ node comments.js
// Server is running on http://localhost:3000