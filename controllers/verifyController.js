const Verification = require('../models/Verification');
const User=require('../models/User')
exports.verifyFace = async (req, res) => {
  try {
   
    const profileImage = req.files.profile?.[0];
    const selfieImage = req.files.selfie?.[0];

    if (!profileImage || !selfieImage) {
      return res.status(400).json({ msg: 'Both images required' });
    }

    
    const existing = await Verification.findOne({
      user: req.user.id
    });

    if (existing) {
      return res.status(400).json({
        msg: 'Verification already submitted'
      });
    }

    
    const verification = await Verification.create({
      user: req.user.id,
      selfie: selfieImage.path,
      status: 'pending'
    });

    res.json({
      status: 'pending',
      verification
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getPendingVerifications = async (req, res) => {
  const data = await Verification.find({ status: 'pending' })
    .populate('user', 'name email');

  res.json(data);
};
exports.approveVerification = async (req, res) => {
  const verification = await Verification.findById(req.params.id);

  if (!verification) {
    return res.status(404).json({ msg: 'Not found' });
  }

  verification.status = 'approved';
  verification.reviewedBy = req.user.id;
  await verification.save();

 
  await User.findByIdAndUpdate(verification.user, {
    isVerified: true
  });

  res.json({ msg: 'User verified successfully' });
};

exports.rejectVerification = async (req, res) => {
  const verification = await Verification.findById(req.params.id);

  if (!verification) {
    return res.status(404).json({ msg: 'Not found' });
  }

  verification.status = 'rejected';
  verification.reviewedBy = req.user.id;

  
  verification.rejectionReason = req.body?.reason || "No reason provided";

  await verification.save();

  res.json({ msg: 'Verification rejected' });
};