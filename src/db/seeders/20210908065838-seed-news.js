module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          title: 'Sit amet risus nullam eget',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Sodales neque sodales ut etiam sit amet nisl purus. Erat nam at lectus urna duis convallis convallis tellus. Ullamcorper a lacus vestibulum sed.',
          image:
            'https://images.unsplash.com/photo-1562597655-46e7cfb4df36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8em9vJTIwZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          adminId: '3',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Felis donec et odio pellentesque',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam. Erat velit scelerisque in dictum non. Magna sit amet purus gravida. Quis viverra nibh cras pulvinar mattis nunc sed.',
          image:
            'https://images.unsplash.com/photo-1562597655-5643ba2f00a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8em9vJTIwZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          adminId: '3',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Viverra aliquet eget sit amet',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis ullamcorper velit. Purus faucibus ornare suspendisse sed nisi lacus sed. Ac odio tempor orci dapibus ultrices. Volutpat sed cras ornare arcu dui vivamus.',
          image:
            'https://images.unsplash.com/photo-1629940639876-1526315cfae5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8em9vJTIwZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          adminId: '4',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Quam id leo in vitae',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a. Tellus id interdum velit laoreet id donec ultrices tincidunt. Posuere morbi leo urna molestie at elementum eu facilisis. Cras tincidunt lobortis feugiat vivamus at augue eget.',
          image:
            'https://images.unsplash.com/photo-1578135568900-444f9ebf2682?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHpvbyUyMGRhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          adminId: '5',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Pellentesque habitant morbi tristique senectus',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Tincidunt ornare massa eget egestas purus. Vitae tempus quam pellentesque nec nam aliquam sem et tortor.',
          image:
            'https://images.unsplash.com/photo-1536670200388-520780010dd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHpvbyUyMGRhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          adminId: '4',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          title: 'Libero justo laoreet sit amet',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://images.unsplash.com/photo-1536742875002-822b7f87b140?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHpvbyUyMGRhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          adminId: '2',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
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
    await queryInterface.bulkDelete('News', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
