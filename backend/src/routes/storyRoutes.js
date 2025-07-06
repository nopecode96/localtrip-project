const express = require('express');
const router = express.Router();

const storyController = require('../controllers/storyController');

// GET /story - Get all stories
router.get('/', storyController.getAllStories);

// GET /story/:slug - Get story by slug
router.get('/:slug', storyController.getStoryBySlug);

module.exports = router;
