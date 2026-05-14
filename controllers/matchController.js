const Like = require('../models/Like');
const Match = require('../models/Match');
const Block = require('../models/Block');

exports.likeUser = async (req, res) => {
  const from = req.user.id;
  const to = req.params.id;

  if (from === to) {
    return res.status(400).json({ msg: 'Self like not allowed' });
  }

  
  const blocked = await Block.findOne({
    $or: [
      { blocker: to, blocked: from },
      { blocker: from, blocked: to }
    ]
  });

  if (blocked) {
    return res.status(403).json({ msg: 'Blocked relationship exists' });
  }

  const exists = await Like.findOne({ fromUser: from, toUser: to });
  if (exists) {
    return res.status(400).json({ msg: 'Already liked' });
  }

  await Like.create({ fromUser: from, toUser: to, type: 'like' });

  const reverse = await Like.findOne({ fromUser: to, toUser: from });

  if (reverse) {
    const existingMatch = await Match.findOne({
      users: { $all: [from, to] }
    });

    if (existingMatch) {
      return res.json({ msg: 'Already matched', match: existingMatch });
    }

    const match = await Match.create({
      users: [from, to],
      unreadCount: 0
    });

    return res.json({ msg: 'Matched', match });
  }

  res.json({ msg: 'Liked' });
};
exports.dislikeUser = async (req, res) => {
  await Like.create({
    fromUser: req.user.id,
    toUser: req.params.id,
    type: 'dislike'
  });

  res.json({ msg: 'Disliked' });
};

exports.superLikeUser = async (req, res) => {
  await Like.create({
    fromUser: req.user.id,
    toUser: req.params.id,
    type: 'superlike'
  });

  res.json({ msg: 'Super liked' });
};

exports.getMatches = async (req, res) => {
  const matches = await Match.find({
    users: req.user.id
  }).populate('users', 'name photos');

  res.json(matches);
};

exports.getRecentMatches = async (req, res) => {
  const matches = await Match.find({
    users: req.user.id
  }).sort({ createdAt: -1 }).limit(10);

  res.json(matches);
};

exports.getMatchDetails = async (req, res) => {
  const match = await Match.findById(req.params.id)
    .populate('users', 'name photos');

  res.json(match);
};

exports.getUnreadCount = async (req, res) => {
  const matches = await Match.find({ users: req.user.id });

  const total = matches.reduce((sum, m) => sum + m.unreadCount, 0);

  res.json({ unread: total });
};