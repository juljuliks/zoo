module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Photos',
      [
        {
          photoUrl:
            'https://images.unsplash.com/photo-1612531751121-140fe9114e4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1500467525088-aafe28c0a95e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1108&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '1',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1535082427395-4a20c7c7af88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1044&q=80',
          animalId: '2',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1468560721961-0c42d2f9dcf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
          animalId: '2',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1463501810073-6e31c827a9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '2',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1600157710880-2fc0f8764c80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
          animalId: '2',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1596974341452-b92f112d8a2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '2',
        },

        {
          photoUrl:
            'https://images.unsplash.com/photo-1591706405280-f03acb082051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1532393950032-b666e39c29b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1562742686-0b38a29473ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1564569918956-2cf8a82eb1e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1539131258078-89aaa90dd845?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '3',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1589307817967-c612f7daa06b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1071&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1612126313662-50d05b497b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1588508107117-227d4ab6b751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1575830395273-f94a0a9707d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1554490752-9ee811711e19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1534995191007-2a6388f50871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1040&q=80',
          animalId: '4',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1584315059202-5daeb3cf2a22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '5',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1575414347038-6d9976e1f74a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '5',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1502031176098-2e91ccc16e59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '6',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1548148491-90655471726c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=863&q=80',
          animalId: '6',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1569012658712-3a90c6c17877?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=970&q=80',
          animalId: '6',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1593035896614-4efe63dac521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1070&q=80',
          animalId: '6',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1557401622-cfc0aa5d146c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
          animalId: '7',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1506677383390-84397709dfa7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1521&q=80',
          animalId: '7',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1531884070720-875c7622d4c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
          animalId: '7',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1567161569146-655f67e64017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
          animalId: '7',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1617691763432-8b45e6748b71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1615798763618-183906cd14b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1518549333684-ffbf63f98149?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1566599247237-d90417429f50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '8',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1603247076649-5c4e567422e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '9',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1522583663783-db76d8b6f876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80',
          animalId: '9',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1617661338488-cad2f23de680?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80',
          animalId: '9',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1470298961567-3c24e6d6a086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
          animalId: '9',
        },
        
        {
          photoUrl:
            'https://images.unsplash.com/photo-1600682322637-95c40966e79f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1076&q=80',
          animalId: '10',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1568068827266-aa5fae4c472d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '10',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1550973595-c36685efe72d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
          animalId: '10',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1590051222536-54231ca10131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
          animalId: '10',
        },
      
        {
          photoUrl:
            'https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '11',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1496070242169-b672c576566b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=941&q=80',
          animalId: '11',
        },
      
        {
          photoUrl:
            'https://images.unsplash.com/photo-1511144444154-42bd5871a1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1116&q=80',
          animalId: '12',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1609627696473-3999229e8904?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '12',
        },
        
        {
          photoUrl:
            'https://images.unsplash.com/photo-1568965081729-85dad42f18ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '13',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1576171441151-2635a871089a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
          animalId: '13',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1567955464914-6f85a2792925?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '13',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1567866534309-e8baae1bf420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '13',
        },
        
        {
          photoUrl:
            'https://images.unsplash.com/photo-1600191252219-478b9482b410?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '14',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1560726853-257e78b87eca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
          animalId: '14',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1570805211821-9048a5798ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1077&q=80',
          animalId: '14',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1515735543535-12664d2453f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '15',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1502839604051-1d3956c4d9c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '15',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1487446874598-3040b74f721d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '15',
        },
        
        {
          photoUrl:
            'https://images.unsplash.com/photo-1603630138578-a45a87fa97e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
          animalId: '16',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1602143221967-ff9a1a490e00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '16',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1566177229701-8895c29b9c68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          animalId: '17',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1562053923-52d3ebb09d31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '17',
        },
        
        {
          photoUrl:
            'https://images.unsplash.com/photo-1610831861727-761416408bf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80',
          animalId: '18',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1567517412043-7b2c07aa08f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
          animalId: '18',
        },
        
        {
          photoUrl:
            'https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
          animalId: '19',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1602587557695-9fa83da489c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '19',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1568430328012-21ed450453ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80',
          animalId: '19',
        },
               {
          photoUrl:
            'https://upload.wikimedia.org/wikipedia/commons/7/76/White_Marlin_in_North_Carolina_1394318584_1.jpg',
          animalId: '20',
        },
        {
          photoUrl:
            'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '21',
        },
               {
          photoUrl:
            'https://images.unsplash.com/flagged/photo-1591475791029-f9efe6297456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
          animalId: '21',
        },
               {
          photoUrl:
            'https://images.unsplash.com/photo-1590787996529-a542c86ca267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
          animalId: '21',
        },
               {
          photoUrl:
            'https://images.unsplash.com/photo-1515970501993-dafc9f582f3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '22',
        },
               {
          photoUrl:
            'https://images.unsplash.com/photo-1480321182142-e77f14b9aa64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
          animalId: '22',
        },
               {
          photoUrl:
            'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80',
          animalId: '22',
        },

          {
          photoUrl:
            'https://images.unsplash.com/photo-1566544496485-02b11e54229b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          animalId: '23',
        },
               {
          photoUrl:
            'https://images.unsplash.com/photo-1599886964275-41dac3b442c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80',
          animalId: '23',
        },
               {
          photoUrl:
            'https://images.unsplash.com/photo-1535684405415-f991bbab0866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80',
          animalId: '23',
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
    await queryInterface.bulkDelete('Photos', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
