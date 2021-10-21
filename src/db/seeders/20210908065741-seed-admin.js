module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          firstName: 'Greyson',
          lastName: 'McCullough',
          email: 'Greyson_McCullough43@yahoo.com',
          password: '123456',
          isSuperAdmin: 'true',
        },
        {
          firstName: 'Kennith',
          lastName: 'Walsh',
          email: 'Kennith_Walsh@hotmail.com',
          password: '123456',
          isSuperAdmin: 'true',
        },
        {
          firstName: 'Bessie',
          lastName: 'Flatley',
          email: 'Bessie49@yahoo.com',
          password: '123456',
          isSuperAdmin: 'false',
        },
        {
          firstName: 'Kiara',
          lastName: 'Harvey',
          email: 'Kiara.Harvey35@hotmail.com',
          password: '123456',
          isSuperAdmin: 'false',
        },
        {
          firstName: 'Demarco',
          lastName: 'Larkin',
          email: 'Demarco.Larkin67@hotmail.com',
          password: '123456',
          isSuperAdmin: 'false',
        },
        {
          firstName: 'Artem',
          lastName: 'Shalaginov',
          email: 'shvartem@gmail.com',
          password: '123456',
          isSuperAdmin: 'true',
        },
      ],
      {},
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
