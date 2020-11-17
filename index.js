const express = require('express');
const mongoose = require('mongoose');
const contactController = require('./src/controllers/contactController'); // Imports routes for the products
const cors = require('cors')

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb://127.0.0.1:27017/contact', {
  useNewUrlParser: true
});

app.use(cors())

app.use(contactController);

app.listen(3000, () => { console.log('Server is running...') });