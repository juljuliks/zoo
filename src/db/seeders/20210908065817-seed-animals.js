module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Animals',
      [
        {
          name: 'Амурский тигр',
          description: 'Амурский тигр — хищник из семейства кошачьих, рода пантер, класса млекопитающих. Принадлежит к виду тигров, составляет отдельный подвид. По размеру почти как малолитражный автомобиль — 3 метра, а вес в три раза меньше — в среднем 220 кг. По природе самцы на четверть крупнее самок. ',
          image:
            'https://images.unsplash.com/photo-1603123495144-59fa702e8dd0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW11ciUyMHRpZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '1',
        },
        {
          name: 'Носорог',
          description: 'Носоро́говые, или носоро́ги, — семейство непарнокопытных млекопитающих из надсемейства носорогобразных, содержащее пять современных видов, распространённых в Африке и Азии.',
          image:
            'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJoaW5vY2Vyb3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '1',
        },
        {
          name: 'Дельфин',
          description: 'Дельфи́новые, или дельфи́ны, — семейство морских млекопитающих из парвотряда зубатых китов инфраотряда китообразных.',
          image:
            'https://images.unsplash.com/photo-1564569918956-2cf8a82eb1e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvbHBoaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '1',
        },
        {
          name: 'Страус',
          description: 'Африка́нский стра́ус — бескилевая нелетающая птица семейства страусовых. Его научное название в переводе с греческого означает «воробей-верблюд». ',
          image:
            'https://images.unsplash.com/photo-1539028418546-92c27329347a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3N0cmljaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '2',
        },
        {
          name: 'Попугай',
          description: 'Попугаеобра́зные — отряд птиц из инфракласса новонёбных. Отряд состоит примерно из 398 видов, принадлежащих к 92 родам. Известны с миоцена.',
          image:
            'https://images.unsplash.com/photo-1629940639876-1526315cfae5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMHBhcnJvdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '2',
        },
        {
          name: 'Павлин',
          description: 'Павли́ны — род крупных птиц из подсемейства Pavoninae семейства фазановых. Удлинённый хвост павлинов плоский, в то время как у большинства фазановых — крышеобразный. Благодаря пышному, распускаемому веером глазчатому «хвосту» павлин известен как самая красивая птица среди курообразных.',
          image:
            'https://images.unsplash.com/photo-1527720096329-8773301eb44f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMHBlYWNvY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '2',
        },
        {
          name: 'Орёл',
          description: 'Орлы́ — род крупных птиц семейства ястребиных.',
          image:
            'https://images.unsplash.com/photo-1515708781109-f5a70769fe89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGFyayUyMGVhZ2xlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '2',
        },
        {
          name: 'Ящерица',
          description: 'Ящерицы — парафилетическая группа пресмыкающихся отряда чешуйчатых, традиционно рассматриваемая в ранге подотряда. Не является биологически чётко определяемой категорией и включает всех чешуйчатых, кроме змей и двуходок',
          image:
            'https://images.unsplash.com/photo-1530809786930-5b12b9e4fe72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGxpemFyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '3',
        },
        {
          name: 'Варан',
          description: 'Вара́ны — род ящериц из инфраотряда Paleoanguimorpha, единственный современный род в семействе варанов или варановых.',
          image:
            'https://images.unsplash.com/photo-1624545825791-d077dc45894e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vbml0b3IlMjBsaXphcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '3',
        },
        {
          name: 'Анаконда',
          description: 'Анаконда, или гига́нтская анако́нда, или обыкновенная анаконда, или зелёная анаконда, — вид змей из подсемейства удавов. В старой литературе можно встретить название «водяной удав». Встречающееся изредка в русском языке название «зелёная анаконда» — калька с английского названия этой змеи green anaconda.',
          image:
            'https://images.unsplash.com/photo-1605359205967-03806a928b3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuYWNvbmRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '3',
        },
        {
          name: 'Лягушка',
          description: 'Лягушки — общеупотребительное название группы животных из отряда бесхвостых земноводных. В широком смысле термин «лягушка» относится ко всем представителям отряда бесхвостых. В узком смысле это название применяется по отношению к представителям семейства настоящих лягушек. Личинки лягушек называются головастиками.',
          image:
            'https://images.unsplash.com/photo-1525220120926-2c9ab3ab7bfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGZyb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '4',
        },
        {
          name: 'Тритон',
          description: 'Трито́ны — общее название группы животных отряда хвостатых земноводных. Понятие «тритон» в широком смысле не имеет определённой систематической привязки, это слово может встречаться в названиях животных из разных семейств.',
          image:
            'https://images.ru.prom.st/596287015_ispanskij-triton-lissotriton.jpg',
          categoryId: '4',
        },
        {
          name: 'Саламандра',
          description: 'Салама́ндры — род хвостатых земноводных. Научное название происходит от перс. سمندر‎: sām — «огонь», andarūn — «внутри».',
          image:
            'https://images.unsplash.com/photo-1568965081729-85dad42f18ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYW1hbmRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '4',
        },
        {
          name: 'Жаба',
          description: 'Жабы, или настоящие жабы, — семейство бесхвостых земноводных, единственное, в котором все представители называются «жабами», хотя некоторые виды можно назвать лягушками.',
          image:
            'https://images.unsplash.com/photo-1584468339866-5c4d2c54db0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRvYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '4',
        },
        {
          name: 'Сом',
          description: 'Обыкнове́нный сом, или европейский сом — крупная пресноводная бесчешуйчатая рыба семейства сомовых. Длина тела до 5 м, масса до 400 кг. Л. П. Сабанеев приводит сведения Кесслера о поимке сомов массой более 300 кг в XIX веке, в Днепре, Днестре и Одере.',
          image:
            'https://d138cv3no7lm06.cloudfront.net/sites/default/files/styles/large/public/images/news-tips/57fba9595182e69966aff2dfdcd4b5c3.jpg?itok=uYG2mgZk',
          categoryId: '5',
        },
        {
          name: 'Гуппи',
          description: 'Гу́ппи — пресноводная живородящая рыба. Гуппи обладают ярко выраженным половым диморфизмом — самцы и самки отличаются по размеру, форме и окраске: Размер самцов 1,5—4 см; стройные; породистые особи часто с длинными плавниками; окраска часто яркая.',
          image:
            'https://diapteron.co.uk/wp-content/uploads/2020/02/Guppy-Black-Poecilia-reticulata-1.jpg',
          categoryId: '5',
        },
        {
          name: 'Тунец',
          description: 'Тунцы́ — группа морских рыб, образующая трибу Thunnini в семействе скумбриевых. В трибу включают 15 видов, принадлежащих к 5 родам. Эти рыбы сильно варьируются по размеру и массе от 50 см и 1,8 кг до 4,6 м и 684 кг. Название происходит от др.-греч. thynō — «бросаться», «кидаться».',
          image:
            'https://images.unsplash.com/photo-1609529666719-1d61af4bb351?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHR1bmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '5',
        },
        {
          name: 'Черная Рыба-Дракон',
          description: 'Черный дракон водится на больших глубинах от 1000 до 2 000 метров в Тихом, Индийском и Атлантическом океанах. Эти дракончики хоть и малы, но очень агрессивны. Они имеют достаточно большую голову и пасть с острейшими зубами. На подбородке находится длинный ус, а на его кончике - рыболовная приманка – фотофор.',
          image:
            'http://cdn1.theinertia.com/wp-content/uploads/2014/06/drago.jpg',
          categoryId: '5',
        },
        {
          name: 'Кит',
          description: 'Кит – это не рыба, а млекопитающее животное. Киты отличаются гигантскими размерами тела, самыми большими среди всех млекопитающих. И все же вес и длина туловища зависит от вида. Например, размер синего кита (самого большого млекопитающего в мире) составляет 33 метра, а весит кит около 150 тонн.',
          image:
            'https://images.unsplash.com/photo-1602587557695-9fa83da489c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          categoryId: '1',
        },
        {
          name: 'Рыба-меч',
          description: 'Рыба-меч (научное название Xiphias gladius) – это хищник, водится в Северо-восточной Атлантике и в Средиземном море. Это одинокий, очень мигрирующий, очень прожорливый и агрессивный хищник, поглощающий свою добычу сразу. Ест мелкую рыбу (сардины и скумбрия) и кальмаров.',
          image:
            'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/graphics/general/F_SUM21_swordfish_opener.jpg?wid=640',
          categoryId: '5',
        },
        {
          name: 'Белый Медведь',
          description: 'Белый медведь — самый крупный представитель семейства медвежьих и отряда хищных (если не включать в отряд хищных ластоногих). Его длина достигает 3 м, масса до 1 т. Обычно самцы весят 400—450 кг, длина тела 200—250 см. Белого медведя от других медведей отличают длинная шея и плоская голова.',
          image:
            'https://images.unsplash.com/photo-1593946460607-d1570da6268f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          categoryId: '1',
        },
        {
          name: 'Пума',
          description: 'Пума – представитель семейства кошачьих, вид пума. К этому виду принадлежит 6 подвидов. Между собой эти подвиды отличаются размерами и окраской.',
          image:
            'https://images.unsplash.com/photo-1527720255604-b27935ade401?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          categoryId: '1',
        },
        {
          name: 'Амурский тигр',
          description: 'Амурский тигр — хищник из семейства кошачьих, рода пантер, класса млекопитающих. Принадлежит к виду тигров, составляет отдельный подвид. По размеру почти как малолитражный автомобиль — 3 метра, а вес в три раза меньше — в среднем 220 кг. По природе самцы на четверть крупнее самок.',
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
