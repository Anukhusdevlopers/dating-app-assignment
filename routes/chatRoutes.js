const express = require('express');
const router = express.Router();

const {
  sendMessage,
  getChat
} = require('../controllers/chatController');

const { protect } = require('../middlewares/auth');

router.post('/send', protect, sendMessage);
router.get('/:matchId', protect, getChat);

module.exports = router;