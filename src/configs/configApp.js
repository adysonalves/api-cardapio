module.exports = function configApp(app, express){

    const router = require('../routes/index');

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/', router);


};