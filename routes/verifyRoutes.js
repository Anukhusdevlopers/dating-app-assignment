const express = require('express');
const router = express.Router();

const {
  verifyFace,
  getPendingVerifications,
  approveVerification,
  rejectVerification
} = require('../controllers/verifyController');

const { protect, admin } = require('../middlewares/auth');
const upload = require('../config/multer');


router.post(
  '/face',
  protect,
  upload.fields([
    { name: 'profile', maxCount: 1 },
    { name: 'selfie', maxCount: 1 }
  ]),
  verifyFace
);


router.get('/pending', protect, admin, getPendingVerifications);
router.put('/approve/:id', protect, admin, approveVerification);
router.put('/reject/:id', protect, admin, rejectVerification);

module.exports = router;