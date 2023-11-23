const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());

const port = process.env.PORT;
const mongoURI = process.env.MONGODB_URI;

// need to put cors in

// connect to mongodb using mongoose
mongoose.set('strictQuery', false);
mongoose
  .connect(mongoURI)
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
