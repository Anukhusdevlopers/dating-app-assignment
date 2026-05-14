const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ msg: 'Unauthorized - No token' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ msg: 'Invalid token format' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: 'Invalid token' });
  }
};



exports.admin = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }

    
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Admin access only' });
    }

    next();
  } catch (err) {
    return res.status(500).json({ msg: 'Server error' });
  }
};