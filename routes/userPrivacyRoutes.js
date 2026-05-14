const express = require('express');
const router = express.Router();

const {
  toggleHideProfile,
  toggleLastSeen,
  updatePrivacy
} = require('../controllers/userPrivacyController');

const { protect } = require('../middlewares/auth');

router.put('/hide', protect, toggleHideProfile);
router.put('/last-seen', protect, toggleLastSeen);
router.put('/privacy', protect, updatePrivacy);

module.exports = router;