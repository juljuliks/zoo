const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tariff extends Model {
    static associate() {}
  }
  Tariff.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      condition: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Tariff',
    },
  );
  return Tariff;
};
