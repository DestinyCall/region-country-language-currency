const mongoose = require('mongoose');

let Currency = mongoose.model('currencies', {
  symbol: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  symbol_native: {
    type: String,
    required: true,
  },
  decimal_digits: {
    type: Number,
    default: 0,
  },
  rounding: {
    type: Number,
    default: 0,
  },
  code: {
    type: String,
    required: true,
  },
  name_plural: {
    type: String,
    required: true,
  },
});

module.exports = { Currency };
