
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


// Set up the Handlebars template engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');


// Import the website routes
const indexRouter = require('./app_server/routes/index');


 // Register the homepage and travel routes first
app.use('/', indexRouter);

// Serve static files such as CSS, images, and other HTML pages
app.use(express.static(path.join(__dirname, 'public')));

// Start the Express server
app.listen(PORT, () => {
  console.log(`Travlr Getaways server running at http://localhost:${PORT}`);
});