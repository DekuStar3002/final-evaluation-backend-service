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

const updateContentType = async (req, res) => {
  try {
    const { name, id } = req.body;
    const updatedContentType = await contentService.updateContentType(name, id);
    res.status(200).json({
      data: updatedContentType
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const addFeatureToContentType = async (req, res) => {
  try {
    const { id, field_name, field_type } = req.body;
    const updatedContentType = await contentService.addFeatureToContentType(id, field_name, field_type);
    res.status(200).json({
      data: updatedContentType
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = { createContentType, updateContentType, addFeatureToContentType };