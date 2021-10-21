const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate({ News }) {
      this.hasMany(News, { foreignKey: 'adminId' });
    }
  }
  Admin.init(
    {
      firstName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [6, 10],
        },
      },
      isSuperAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Admin',
    },
  );
  return Admin;
};
