const {Sequelize} = require('sequelize');

const conn = new Sequelize({
    database: 'cardapio',
    username: 'root',
    password: '1234',
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    pool: {
        max: 10,
        min: 0
    }
});

module.exports = conn;