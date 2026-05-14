const User = require('../models/User');

exports.suspendUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, {
    isBlocked: true
  });

  res.json({ msg: 'User suspended' });
};

exports.blacklistUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, {
    isBlocked: true
  });

  res.json({ msg: 'User blacklisted' });
};