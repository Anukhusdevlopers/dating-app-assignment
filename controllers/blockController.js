const Block = require('../models/Block');

exports.blockUser = async (req, res) => {
  await Block.create({
    blocker: req.user.id,
    blocked: req.params.id,
    type: 'block'
  });

  res.json({ msg: 'Blocked successfully' });
};

exports.unblockUser = async (req, res) => {
  await Block.findOneAndDelete({
    blocker: req.user.id,
    blocked: req.params.id
  });

  res.json({ msg: 'Unblocked' });
};

exports.restrictUser = async (req, res) => {
  await Block.create({
    blocker: req.user.id,
    blocked: req.params.id,
    type: 'restrict'
  });

  res.json({ msg: 'User restricted' });
};