
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static website files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the Express server
app.listen(PORT, () => {
  console.log(`Travlr Getaways server running at http://localhost:${PORT}`);
});