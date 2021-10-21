module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Tariffs',
      [
        {
          title: 'Взрослый',
          description: 'Посещение зоопарка',
          condition: 'Полный билет для взрослых',
          price: '250',
          image:
            'https://images.unsplash.com/photo-1625711276045-6f23204e0220?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHpvbyUyMGFkdWx0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          title: 'Детский',
          description: 'Посещение зоопарка',
          condition: 'Детям до 14 лет',
          price: '70',
          image:
            'https://images.unsplash.com/photo-1609381686079-8aa7a751c755?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHpvbyUyMGtpZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          title: 'Студенческий',
          description: 'Билет по льготной цене для пенсионеров',
          condition: 'При предъявлении студенческого билета',
          price: '100',
          image:
            'https://images.unsplash.com/photo-1539302730708-a9ccbdd8332b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHN0dWRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          title: 'Пенсионный',
          description: 'Билет по льготной цене для пенсионеров',
          condition: 'При предъявлении пенсионного удостоверения',
          price: '100',
          image:
            'https://images.unsplash.com/photo-1546592109-af8e8e2e30f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmV0aXJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
    await queryInterface.bulkDelete('Tariffs', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
