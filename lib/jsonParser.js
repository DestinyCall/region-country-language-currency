const region = require('../data/region.json');
const lang = require('../data/language.json');
const money = require('../data/currency.json');
const country = require('../data/countries.json');

const { Language } = require('../models/languages');
const { Currency } = require('../models/currencies');
const { Country } = require('../models/countries');
const { Region } = require('../models/regions');

const parseRegions = () => {
  Region.insertMany(region)
    .then(() => {
      console.log('Regions inserted successfully!');
    })
    .catch((err) => {
      console.log(err);
    });
};

const parseLanguages = () => {
  Language.insertMany(lang)
    .then(() => {
      console.log('Languages inserted successfully!');
    })
    .catch((err) => {
      console.log(err);
    });
};

const parseCurrencies = () => {
  Currency.insertMany(money)
    .then(() => {
      console.log('Currencies inserted successfully');
    })
    .catch((err) => {
      console.log(err);
    });
};

const parseCountries = () => {
  Country.insertMany(country)
    .then(() => {
      console.log('countries inserted successfully');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  parseRegions,
  parseLanguages,
  parseCurrencies,
  parseCountries,
};
