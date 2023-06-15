const {DataTypes} = require('sequelize');
const conn = require('../database/conn');

const Cliente = conn.define('cliente', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING(60),
        allowNull: false,
        required: true
    },
    telefone:{
        type: DataTypes.STRING(11),
        allowNull: false,
        required: true
    },
    cpf:{
        type: DataTypes.STRING(11),
        allowNull: false,
        required: true,
        unique: true
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
},{tableName: 'cliente'});

module.exports = Cliente;