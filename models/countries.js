const mongoose = require('mongoose');
let Country = mongoose.model('countries', {
  name: {
    type: String,
    require: true,
  },
  iso: {
    type: String,
    default: null,
  },
  iso3: {
    type: String,
    default: null,
  },
  iso2: {
    type: String,
    default: null,
  },
  phone_code: {
    type: String,
    require: true,
  },
  capital: {
    type: String,
    default: null,
  },
  currency: {
    code: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    symbol: {
      type: String,
      default: null,
    },
  },
  language: {
    code: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  },
  flag: {
    type: String,
    default: null,
  },
  tld: {
    type: String,
    default: null,
  },
  native: {
    type: String,
    default: null,
  },
  region: {
    type: String,
    default: null,
  },
  subregion: {
    type: String,
    default: null,
  },
  timezones: [
    {
      zoneName: {
        type: String,
        default: null,
      },
      gmtOffset: {
        type: String,
        default: null,
      },
      gmtOffsetName: {
        type: String,
        default: null,
      },
      abbreviation: {
        type: String,
        default: null,
      },
      tzName: {
        type: String,
        default: null,
      },
    },
  ],
  latitude: {
    type: String,
    require: true,
  },
  longitude: {
    type: String,
    require: true,
  },
  emoji: {
    type: String,
    default: null,
  },
  emojiU: {
    type: String,
    default: null,
  },
});

module.exports = { Country };
