const {DataTypes} = require('sequelize');
const conn = require('../database/conn');

// RELAÇÃO
const Cliente = require('./Cliente');

const EnderecoCliente = conn.define('endereco_cliente', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    endereco:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    numero:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    bairro:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    complemento:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    ponto_referencia:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    cep:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    id_cliente:{
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
        unique: true
    }
}, {tableName: 'endereco_cliente'});

Cliente.hasOne(EnderecoCliente, {foreignKey: 'id_cliente'});
EnderecoCliente.belongsTo(Cliente, {foreignKey: 'id_cliente'});

module.exports = EnderecoCliente;