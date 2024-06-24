
const mongoose = require('mongoose');
require('dotenv').config();
// Define the MongoDB Connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;
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
















