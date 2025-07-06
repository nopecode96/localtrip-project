const express = require('express');
const router = express.Router();
const exploreController = require('../controllers/exploreController');

router.get('/hosts', exploreController.getHosts);
router.get('/filters', exploreController.getFilters);

module.exports = router;
