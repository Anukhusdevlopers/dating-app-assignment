const Media = require('../models/Media');

exports.uploadMedia = async (req, res) => {
  const file = req.file;

  const media = await Media.create({
    user: req.user.id,
    url: file.path,
    type: file.mimetype,
    size: file.size
  });

  res.json(media);
};

exports.getMedia = async (req, res) => {
  const media = await Media.findById(req.params.id);
  res.json(media);
};