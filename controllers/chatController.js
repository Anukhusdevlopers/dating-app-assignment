const Chat = require('../models/Chat');
const Match = require('../models/Match');

exports.sendMessage = async (req, res) => {
  const { matchId, message } = req.body;

  const match = await Match.findById(matchId);
  if (!match) return res.status(404).json({ msg: 'Match not found' });

  if (!match.users.includes(req.user.id)) {
    return res.status(403).json({ msg: 'Not allowed' });
  }

  const chat = await Chat.create({
    matchId,
    sender: req.user.id,
    message
  });

  match.lastMessage = message;
  match.unreadCount += 1;
  await match.save();

  res.json(chat);
};

exports.getChat = async (req, res) => {
  const chats = await Chat.find({
    matchId: req.params.matchId
  }).sort({ createdAt: 1 });

  res.json(chats);
};

exports.sendMedia = async (req, res) => {
  res.json({ msg: 'Media sent (implement multer)' });
};