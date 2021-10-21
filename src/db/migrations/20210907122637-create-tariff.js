module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tariffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      condition: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Tariffs');
  },
};
