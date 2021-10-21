module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      weekdaysOpening: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      weekdaysClosing: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      weekendOpening: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      weekendClosing: {
        type: Sequelize.TIME,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schedules');
  },
};
