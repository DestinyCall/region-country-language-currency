const mongoose = require('mongoose');

let Language = mongoose.model('languages', {
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nativeName: {
    type: String,
    default: null,
  },
});

module.exports = { Language };
