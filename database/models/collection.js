'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Collection.hasOne(models.ContentType, { foreignKey: 'collection_id' });
      Collection.hasMany(models.Content, { foreignKey: 'collection_id' });
    }
  }
  Collection.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};