const { ContentType, Collection, Content } = require('../../database/models');

const addContentToCollection = async (collection_id, content) => {
  const collection = await Collection.findOne({ where: { id: collection_id }, include: ContentType });
  if (!collection) {
    throw new Error('Collection not found');
  }
  
  const newContent = await Content.create({
    collection_id,
    content_type_id: collection.ContentType.id,
    values: content,
  });
  return newContent;
};

const editContentOfCollection = async (collection_id, content ) => {
  const collection = await Collection.findOne({ where: { id: collection_id } });
  if (!collection) {
    throw new Error('Collection not found');
  }
  await Content.update({ values: content.values }, { where: { id: content.id } });
  return { message: 'Updated Succefully' };
};

const deleteContentOfCollection = async (collection_id, content_id) => { 
  const collection = await Collection.findOne({ where: { id: collection_id } });
  if (!collection) {
    throw new Error('Collection not found');
  }
  await Content.destroy({ where: { id: content_id } });
  return { message: 'Deleted Succefully' };
};

const allCollections = async () => {
  return Collection.findAll();
};

const getContantOfCollection = async (collection_id) => {
  const collection = await Collection.findOne({ where: { id: collection_id }, include: Content });
  if (!collection) {
    throw new Error('Collection not found');
  }
  return collection.Contents;
};

module.exports = { addContentToCollection, editContentOfCollection, deleteContentOfCollection, allCollections, getContantOfCollection };