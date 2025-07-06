require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
app.use(cors());
const prisma = new PrismaClient();

app.use(express.json());


// Import dan gunakan route homepage
const homepageRoutes = require('./routes/homepageRoutes');
app.use('/homepage', homepageRoutes);


// Import dan gunakan route explore
const exploreRoutes = require('./routes/exploreRoutes');
app.use('/explore', exploreRoutes);

// Import dan gunakan route story
const storyRoutes = require('./routes/storyRoutes');
app.use('/story', storyRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Localtrip Backend API is running!' });
});

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
