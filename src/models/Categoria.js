const {DataTypes} = require('sequelize');
const conn = require('../database/conn');

const Categoria = conn.define('categoria_produto', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true
    }
},{tableName: 'categoria_produto'});

module.exports = Categoria;