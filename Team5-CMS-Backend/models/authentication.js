const Sequelize = require('sequelize');
const db = require('../config/database');



const User = db.define('user', {
    UserID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    RoleID : {
        type : Sequelize.TEXT,
        allowNull : false
    }

})


module.exports = User;
