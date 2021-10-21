const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ Animal }) {
      this.belongsTo(Animal, { foreignKey: 'animalId', onDelete: 'cascade' });
    }
  }
  Photo.init(
    {
      photoUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      animalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Photo',
    },
  );
  return Photo;
};
