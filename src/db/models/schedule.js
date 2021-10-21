const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {}
  }
  Schedule.init(
    {
      weekdaysOpening: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      weekdaysClosing: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      weekendOpening: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      weekendClosing: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Schedule',
    },
  );
  return Schedule;
};
