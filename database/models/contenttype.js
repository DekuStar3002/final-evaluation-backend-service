'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ContentType.hasMany(models.Content, { foreignKey: 'content_type_id' });
      ContentType.belongsTo(models.Collection, { foreignKey: 'collection_id' });
    }
  }
  ContentType.init({
    name: DataTypes.STRING,
    field: DataTypes.JSON,
    collection_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ContentType',
  });
  return ContentType;
};