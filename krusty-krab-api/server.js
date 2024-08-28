const mongoose = require('mongoose');
require('dotenv').config();

const app = require('express')();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Your app setup and routes go here...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
