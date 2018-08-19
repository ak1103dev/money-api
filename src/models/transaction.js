const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const schema = new Schema({
  code: String,
  type: {
    type: String,
    enum: ['deposit', 'withdraw'],
    required: true,
  },
  info: String,
  amount: {
    type: Number,
    min: [0, 'LEAST_AMOUNT_BE_ZERO'],
  },
  accountId: {
    type: ObjectId,
    ref: 'Account',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', schema);
