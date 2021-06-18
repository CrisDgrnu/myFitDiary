import Sequelize from 'sequelize';

const connection = new Sequelize('myFitDiary', 'root', '1234', {
    dialect: 'mariadb',
    host: 'localhost',
});

export default connection;









