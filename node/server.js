const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/doctors_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Set up routes
// ...

// Search for doctors
app.get('/doctors', (req, res) => {
    // Here, you can write the logic to query your MongoDB database and retrieve the list of doctors
    // For simplicity, let's return a static response
    const doctors = [
      { name: 'Doctor 1', specialization: 'Specialization 1' },
      { name: 'Doctor 2', specialization: 'Specialization 2' },
      { name: 'Doctor 3', specialization: 'Specialization 3' }
    ];
    res.json(doctors);
  });
  
  // ...
  

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
