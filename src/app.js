const express = require('express');
const app = express();

// CONFIGURAÇÕES DO APP
require('./configs/configApp')(app, express);



module.exports = app;