const { Content, ContentType, Collection } = require('../../database/models');

const createContentType = async (name) => {
  const newCollection = await Collection.create({ name });
  return ContentType.create({ name, collection_id: newCollection.id });
};

const updateContentType = async (name, id) => {
  await ContentType.update({ name }, { where: { id } });
  const updatedContentType = await ContentType.findOne({ where: { id } });
  await Collection.update({ name }, { where: { id: updatedContentType.collection_id } });
  return updatedContentType;
};

module.exports = { createContentType, updateContentType };