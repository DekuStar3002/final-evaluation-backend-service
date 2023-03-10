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

const getAllContentType = async (req, res) => {
  try {
    const contentTypes = await contentService.getAllContentType();
    res.status(200).json({
      data: contentTypes
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const getContentTypeById = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const contentType = await contentService.getContentTypeById(id);
    res.status(200).json({
      data: contentType
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

const editFeatureNameOfContentType = async (req, res) => { 
  try {
    const { id, field_name, new_field_name } = req.body;
    const updatedContentType = await contentService.editFeatureNameOfContentType(id, field_name, new_field_name);
    res.status(200).json({
      data: updatedContentType
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const deleteFieldOfContentType = async (req, res) => {
  try {
    const { id, field_name } = req.body;
    const updatedContentType = await contentService.deleteFieldOfContentType(id, field_name);
    res.status(200).json({
      data: updatedContentType
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = { createContentType, getAllContentType, getContentTypeById, updateContentType, addFeatureToContentType, editFeatureNameOfContentType,deleteFieldOfContentType };