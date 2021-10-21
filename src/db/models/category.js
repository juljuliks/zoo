const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Animal }) {
      this.hasMany(Animal, { foreignKey: 'categoryId' });
    }
  }
  Category.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Category',
    },
  );
  return Category;
};
