
const mongoose = require('mongoose');

// Define the MongoDB Connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

// Set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;  // This object is what you will use to handle events and interact with the database

// Define event listeners for database connection
db.on('connected', () => {
  console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
  console.log("MongoDB connection error:", err);
});

db.on('disconnected', () => {
  console.log("MongoDB disconnected");
});

// Export the db connection
module.exports = db;
















