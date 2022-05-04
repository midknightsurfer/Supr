'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user3@user.io',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'user4@user.io',
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: 'user5@user.io',
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync('password6')
      },
      {
        email: 'user6@user.io',
        username: 'FakeUser6',
        hashedPassword: bcrypt.hashSync('password7')
      },
      {
        email: 'user7@user.io',
        username: 'FakeUser7',
        hashedPassword: bcrypt.hashSync('password8')
      },
      {
        email: 'user8@user.io',
        username: 'FakeUser8',
        hashedPassword: bcrypt.hashSync('password9')
      },
      {
        email: 'user9@user.io',
        username: 'FakeUser9',
        hashedPassword: bcrypt.hashSync('password10')
      },
      {
        email: 'user10@user.io',
        username: 'FakeUser10',
        hashedPassword: bcrypt.hashSync('password11')
      },
      {
        email: 'user11@user.io',
        username: 'FakeUser11',
        hashedPassword: bcrypt.hashSync('password12')
      },
      {
        email: 'user12@user.io',
        username: 'FakeUser12',
        hashedPassword: bcrypt.hashSync('password13')
      },
      {
        email: 'user13@user.io',
        username: 'FakeUser13',
        hashedPassword: bcrypt.hashSync('password14')
      },
      {
        email: 'user14@user.io',
        username: 'FakeUser14',
        hashedPassword: bcrypt.hashSync('password15')
      },
      {
        email: 'user15@user.io',
        username: 'FakeUser15',
        hashedPassword: bcrypt.hashSync('password16')
      },      
      {
        email: 'user16@user.io',
        username: 'FakeUser16',
        hashedPassword: bcrypt.hashSync('password17')
      },      
      {
        email: 'user17@user.io',
        username: 'FakeUser17',
        hashedPassword: bcrypt.hashSync('password18')
      },
      {
        email: 'user18@user.io',
        username: 'FakeUser18',
        hashedPassword: bcrypt.hashSync('password19')
      },
      {
        email: 'user19@user.io',
        username: 'FakeUser19',
        hashedPassword: bcrypt.hashSync('password20')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
