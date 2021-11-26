const { Sequelize } = require('sequelize');
const db = new Sequelize('cms_db', 'cms', 'cms987', {
    host: 'localhost',
    dialect: 'sqlite',
    storage : 'cms_db.sqlite',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;