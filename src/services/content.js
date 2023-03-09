const { Content, ContentType, Collection } = require('../../database/models');

const createContentType = async (name) => {
  const newCollection = await Collection.create({ name });
  const newContentType = await ContentType.create({ name, collection_id: newCollection.id });
  return newContentType;
};

module.exports = { createContentType };