module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Animals',
      [
        {
          name: 'Амурский тигр',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1603123495144-59fa702e8dd0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW11ciUyMHRpZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '1',
        },
        {
          name: 'Носорог',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJoaW5vY2Vyb3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '1',
        },
        {
          name: 'Дельфин',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1564569918956-2cf8a82eb1e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvbHBoaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '1',
        },
        {
          name: 'Страус',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1539028418546-92c27329347a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3N0cmljaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '2',
        },
        {
          name: 'Попугай',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1629940639876-1526315cfae5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMHBhcnJvdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '2',
        },
        {
          name: 'Павлин',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1527720096329-8773301eb44f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMHBlYWNvY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '2',
        },
        {
          name: 'Орёл',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1515708781109-f5a70769fe89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGFyayUyMGVhZ2xlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '2',
        },
        {
          name: 'Ящерица',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1530809786930-5b12b9e4fe72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGxpemFyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '3',
        },
        {
          name: 'Варан',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1624545825791-d077dc45894e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vbml0b3IlMjBsaXphcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '3',
        },
        {
          name: 'Анаконда',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1605359205967-03806a928b3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuYWNvbmRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '3',
        },
        {
          name: 'Лягушка',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1525220120926-2c9ab3ab7bfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGZyb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '4',
        },
        {
          name: 'Тритон',
          description: 'McCullough',
          image:
            'https://images.ru.prom.st/596287015_ispanskij-triton-lissotriton.jpg',
          categoryId: '4',
        },
        {
          name: 'Саламандра',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1568965081729-85dad42f18ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYW1hbmRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '4',
        },
        {
          name: 'Жаба',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1584468339866-5c4d2c54db0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRvYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '4',
        },
        {
          name: 'Сом',
          description: 'McCullough',
          image:
            'https://d138cv3no7lm06.cloudfront.net/sites/default/files/styles/large/public/images/news-tips/57fba9595182e69966aff2dfdcd4b5c3.jpg?itok=uYG2mgZk',
          categoryId: '5',
        },
        {
          name: 'Гуппи',
          description: 'McCullough',
          image:
            'https://diapteron.co.uk/wp-content/uploads/2020/02/Guppy-Black-Poecilia-reticulata-1.jpg',
          categoryId: '5',
        },
        {
          name: 'Тунец',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1609529666719-1d61af4bb351?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHR1bmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '5',
        },
        {
          name: 'Черная Рыба-Дракон',
          description: 'McCullough',
          image:
            'http://cdn1.theinertia.com/wp-content/uploads/2014/06/drago.jpg',
          categoryId: '5',
        },
        {
          name: 'Кит',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1602587557695-9fa83da489c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '5',
        },
        {
          name: 'Рыба-меч',
          description: 'McCullough',
          image:
            'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/graphics/general/F_SUM21_swordfish_opener.jpg?wid=640',
          categoryId: '5',
        },
        {
          name: 'Белый Медведь',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1593946460607-d1570da6268f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          categoryId: '1',
        },
        {
          name: 'Пума',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1527720255604-b27935ade401?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          categoryId: '1',
        },
        {
          name: 'Амурский тигр',
          description: 'McCullough',
          image:
            'https://images.unsplash.com/photo-1535684405415-f991bbab0866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80',
          categoryId: '1',
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
    await queryInterface.bulkDelete('Animals', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
