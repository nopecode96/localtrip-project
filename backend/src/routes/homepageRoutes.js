
const express = require('express');
const router = express.Router();
const homepageController = require('../controllers/homepageController');


// Homepage main data
router.get('/', homepageController.getHomepageData);

// Location suggest API
router.get('/location-suggest', homepageController.locationSuggest);

module.exports = router;
