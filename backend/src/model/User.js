const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require('mongoose');

const schema = new Schema({
  userAccessKey: {
    type: String,
    default: '',
  },
});

module.exports = model('User', schema);
