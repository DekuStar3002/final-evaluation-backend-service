const { contentService } = require('../services');

const createContentType = async (req, res) => {
  try {
    const { name } = req.body;
    const newContentType = await contentService.createContentType(name);
    res.status(201).json({
      data: newContentType
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = { createContentType };