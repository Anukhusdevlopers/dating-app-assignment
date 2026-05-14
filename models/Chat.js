const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  matchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Match'
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  message: String,
  media: String,
  type: {
    type: String,
    enum: ['text', 'image', 'video', 'voice'],
    default: 'text'
  }
}, { timestamps: true });

module.exports = mongoose.model('Chat', chatSchema);