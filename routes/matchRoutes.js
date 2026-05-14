const express = require('express');
const router = express.Router();

const {
  likeUser,
  dislikeUser,
  superLikeUser,
  getMatches,
  getRecentMatches,
  getMatchDetails,
  getUnreadCount
} = require('../controllers/matchController');

const { protect } = require('../middlewares/auth');


router.post('/like/:id', protect, likeUser);
router.post('/dislike/:id', protect, dislikeUser);
router.post('/super-like/:id', protect, superLikeUser);


router.get('/', protect, getMatches);
router.get('/recent', protect, getRecentMatches);
router.get('/unread/count', protect, getUnreadCount);
router.get('/:id', protect, getMatchDetails);

module.exports = router;