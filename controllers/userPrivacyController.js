const User = require('../models/User');

exports.toggleHideProfile = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.isHidden = !user.isHidden;
  await user.save();

  res.json({ hidden: user.isHidden });
};

exports.toggleLastSeen = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.lastSeenVisible = !user.lastSeenVisible;
  await user.save();

  res.json({ lastSeenVisible: user.lastSeenVisible });
};

exports.updatePrivacy = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    req.body,
    { new: true }
  );

  res.json(user);
};