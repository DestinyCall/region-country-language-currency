require('./config/config');
require('./db/mongoose');

const express = require('express');
const cors = require('cors');
const parser = require('./lib/jsonParser');

const app = express();

// Use cors
app.use(cors());

parser.parseRegions();
parser.parseLanguages();
parser.parseCurrencies();
parser.parseCountries();

// Use the body-parser package in our application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
