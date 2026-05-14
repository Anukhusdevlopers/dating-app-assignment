const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  url: String,
  type: String,
  size: Number
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);