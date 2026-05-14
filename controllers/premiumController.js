const User = require('../models/User');

exports.buyPremium = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, {
    isPremium: true
  });

  res.json({ msg: 'Premium activated' });
};

exports.boostProfile = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, {
    profileBoost: true
  });

  res.json({ msg: 'Profile boosted' });
};