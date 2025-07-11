require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'Localtrip Backend API is running!'
  });
});

// Basic API endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Localtrip Backend API is running!' });
});

// API info endpoint
app.get('/api-info', (req, res) => {
  res.json({
    name: 'Localtrip Backend API',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3030
  });
});

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3030;

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
