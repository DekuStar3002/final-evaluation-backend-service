const { collectionService } = require('../services');

const addContentToCollection = async (req, res) => {
  try {
    const { collection_id, content } = req.body;
    const addedContent = await collectionService.addContentToCollection(collection_id, content);
    res.status(201).json({
      data: addedContent
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const editContentOfCollection = async (req, res) => { 
  try {
    const { collection_id, content } = req.body;
    const editedContent = await collectionService.editContentOfCollection(collection_id, content);
    res.status(201).json({
      data: editedContent
    });
  } catch (error) { 
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteContentOfCollection = async (req, res) => {
  try {
    const { collection_id, content_id } = req.body;
    const deletedContent = await collectionService.deleteContentOfCollection(collection_id, content_id);
    res.status(200).json({
      data: deletedContent
    });
  } catch (error) { 
    res.status(500).json({
      error: error.message,
    });
  }
};

const allCollections = async (req, res) => {
  try {
    const allCollections = await collectionService.allCollections();
    res.status(200).json({
      data: allCollections
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getContantOfCollection = async (req, res) => {
  try {
    const { collection_id } = req.body;
    const allContents = await collectionService.getContantOfCollection(collection_id);
    res.status(200).json({
      data: allContents
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });    
  }
};

module.exports = {
  addContentToCollection,
  editContentOfCollection,
  deleteContentOfCollection,
  allCollections,
  getContantOfCollection
};