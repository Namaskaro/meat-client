const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require('mongoose');

const schema = new Schema({
  address: {
    type: String,
    default: '',
  },
  fullname: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },

  amount: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
    default: ''
  },
  clientSecret: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: 'Pending',
  },
  products: [
    {
      type: ObjectId,
      ref: 'Product',
    },
  ],
});

module.exports = model('Order', schema);
