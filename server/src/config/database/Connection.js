const Sequelize = require('sequelize');

const connection = new Sequelize('myFitDiary','root','1234',{
    dialect: 'mariadb',
    host: 'localhost',
    logging: false
});

connection.sync({ force: true })

module.exports = connection;









