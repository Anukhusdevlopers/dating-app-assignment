const Report = require('../models/Report');
const User = require('../models/User');

exports.reportUser = async (req, res) => {
  try {
    const report = await Report.create({
      reportedBy: req.user.id,
      reportedUser: req.params.id,
      reason: req.body?.reason,
      description: req.body?.description
    });

    const count = await Report.countDocuments({
      reportedUser: req.params.id
    });

    if (count > 5) {
      await User.findByIdAndUpdate(req.params.id, { isBlocked: true });
    }

    res.json({
      msg: 'Reported',
      data: report
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};