const mongoose = require('mongoose');

const Authschema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('Auth', Authschema);
