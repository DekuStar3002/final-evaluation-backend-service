'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Content.belongsTo(models.ContentType, { foreignKey: 'content_type_id' });
      Content.belongsTo(models.Collection, { foreignKey: 'collection_id' });
    }
  }
  Content.init({
    values: DataTypes.JSON,
    content_type_id: DataTypes.INTEGER,
    collection_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};