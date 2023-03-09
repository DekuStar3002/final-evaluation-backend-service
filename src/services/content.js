const { ContentType, Collection, Content } = require('../../database/models');

const createContentType = async (name) => {
  const newCollection = await Collection.create({ name });
  return ContentType.create({ name, collection_id: newCollection.id });
};

const updateContentType = async (name, id) => {
  await ContentType.update({ name }, { where: { id } });
  const updatedContentType = await ContentType.findOne({ where: { id } });
  await Collection.update({ name }, { where: { id: updatedContentType.collection_id } });
  return { message: 'Updated Successfully' };
};

const addFeatureToContentType = async (id, field_name, field_type) => {
  const contentType = await ContentType.findOne({ where: { id }});
  const newFields = { ...contentType.field };
  newFields[field_name] = field_type;
  await ContentType.update({ field: newFields }, { where: { id }});
  const allContent = await Content.findAll({ where: { content_type_id: contentType.id } });
  await Promise.all(allContent.map((eachContent) => {
    const newValue = { ...eachContent.value };
    newValue[field_name] = null;
    Content.update({ value: newValue}, { where: { id: eachContent.id } });
  }));
  return { message: 'Field Added Successfully' };
};

const editFeatureNameOfContentType = async (id, field_name, new_field_name) => {
  const contentType = await ContentType.findOne({ where: { id } });
  const newFields = { ...contentType.field };
  newFields[new_field_name] = newFields[field_name];
  delete newFields[field_name];
  await ContentType.update({ field: newFields }, { where: { id } });
  const allContent = await Content.findAll({ where: { content_type_id: contentType.id } });
  await Promise.all(allContent.map((eachContent) => {
    const newValue = { ...eachContent.value };
    newValue[new_field_name] = newValue[field_name];
    delete newValue[field_name];
    Content.update({ value: newValue}, { where: { id: eachContent.id } });
  }));
  return { message: 'Edited Field Successfully' };
};

const deleteFieldOfContentType = async (id, field_name) => {
  const contentType = await ContentType.findOne({ where: { id }});
  const newFields = { ...contentType.field };
  delete newFields[field_name];
  await ContentType.update({ field: newFields }, { where: { id }});
  const allContent = await Content.findAll({ where: { content_type_id: contentType.id } });
  await Promise.all(allContent.map((eachContent) => {
    const newValue = {...eachContent.value };
    delete newValue[field_name];
    Content.update({ value: newValue}, { where: { id: eachContent.id } });
  }));
  return { message: 'Field Deleted Successfully' };
};

module.exports = { createContentType, updateContentType, addFeatureToContentType, editFeatureNameOfContentType, deleteFieldOfContentType };