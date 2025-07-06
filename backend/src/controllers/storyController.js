const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all stories
exports.getAllStories = async (req, res) => {
  try {
    const stories = await prisma.story.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(stories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stories' });
  }
};


// Get story by slug
exports.getStoryBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const story = await prisma.story.findUnique({
      where: { slug }
    });
    if (!story) return res.status(404).json({ error: 'Story not found' });
    res.json(story);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch story' });
  }
};
