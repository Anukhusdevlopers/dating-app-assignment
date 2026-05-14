const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  photos: [String],
  deviceId: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isVerified: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  reportCount: { type: Number, default: 0 },

  isHidden: { type: Boolean, default: false },
  lastSeenVisible: { type: Boolean, default: true },

  isPremium: { type: Boolean, default: false },
  profileBoost: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);