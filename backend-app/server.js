// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes'); // Ensure the path to your routes file is correct

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Root route 
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Use the routes defined for /api/*
app.use('/api', dataRoutes); // This allows routing like /api/users, /api/data, etc.

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
