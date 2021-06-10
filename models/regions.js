const mongoose = require('mongoose');

let Region = mongoose.model('regions', {
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = { Region };
