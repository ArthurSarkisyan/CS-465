
const express = require('express');
const router = express.Router();

// Import the controllers
const mainController = require('../controllers/main');
const travelerController = require('../controllers/traveler');

// Route for the homepage
router.get('/', mainController.index);

// Route for the travel page
router.get('/travel', travelerController.travel);

module.exports = router;