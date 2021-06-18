const Sequelize = require('sequelize');

const connection = new Sequelize('myFitDiary','root','1234',{
    dialect: 'mariadb',
    host: 'localhost',
});

module.exports = connection;









