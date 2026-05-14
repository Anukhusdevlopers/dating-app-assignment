const express = require('express');
const router = express.Router();

const { reportUser } = require('../controllers/reportController');
const { protect } = require('../middlewares/auth');

router.post('/:id', protect, reportUser);

module.exports = router;