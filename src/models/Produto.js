const {DataTypes} = require('sequelize');
const conn = require('../database/conn');

const Produto = conn.define('produto', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome_produto:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: true
    }
});