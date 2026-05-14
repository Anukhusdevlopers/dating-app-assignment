const express = require('express');
const router = express.Router();

const {
  buyPremium,
  boostProfile
} = require('../controllers/premiumController');

const { protect } = require('../middlewares/auth');

router.post('/buy', protect, buyPremium);
router.post('/boost', protect, boostProfile);

module.exports = router;