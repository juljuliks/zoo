const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate({ Category, Photo }) {
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.hasMany(Photo, { foreignKey: 'animalId' });
    }
  }
  Animal.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Animal',
    },
  );
  return Animal;
};
