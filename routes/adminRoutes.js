const express = require('express');
const router = express.Router();

const {
  suspendUser,
  blacklistUser
} = require('../controllers/adminController');

const { protect, admin } = require('../middlewares/auth');

router.put('/suspend/:id', protect, admin, suspendUser);
router.put('/blacklist/:id', protect, admin, blacklistUser);

module.exports = router;