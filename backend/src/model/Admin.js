const { model, Schema } = require('mongoose');

const schema = new Schema({
  login: {
    type: String,
    default: '',
    unique: true,
  },
  password: {
    type: String,
    default: '',
    unique: true,
  },
});

module.exports = model('Admin', schema);
