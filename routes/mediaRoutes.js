const express = require('express');
const router = express.Router();

const upload = require('../config/multer');
const { protect } = require('../middlewares/auth');

const {
  uploadMedia,
  getMedia
} = require('../controllers/mediaController');

router.post('/upload', protect, upload.single('file'), uploadMedia);
router.get('/:id', protect, getMedia);

module.exports = router;