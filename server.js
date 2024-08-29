// require('dotenv').config();
// const express = require('express');
// const connectDB = require('./config/db');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/realestate', require('./routes/realEstateRoutes'));
// app.use('/api/maids', require('./routes/maidRoutes'));

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Serve static files from the 'frontendrev' directory
app.use(express.static(path.join(__dirname, 'frontendrev')));

// Route to serve frontpage.html as the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontendrev', 'frontpage.html'));
});

// Routes
app.use('/api/realestate', require('./routes/realEstateRoutes'));
app.use('/api/maids', require('./routes/maidRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});