const Sequelize = require('sequelize');
const db = require('../config/database');

const Role = db.define('role', {
    RoleID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RoleName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Description: {
        type: Sequelize.TEXT,
        allowNull: false
    }

})

module.exports = Role;