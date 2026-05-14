const express = require('express');
const router = express.Router();

const {
  blockUser,
  unblockUser,
  restrictUser
} = require('../controllers/blockController');

const { protect } = require('../middlewares/auth');

router.post('/:id', protect, blockUser);
router.delete('/:id', protect, unblockUser);
router.post('/restrict/:id', protect, restrictUser);

module.exports = router;