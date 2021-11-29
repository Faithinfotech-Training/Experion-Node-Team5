const Sequelize = require('sequelize');
const db = require('../config/database');


const Staff = db.define('staff',{
    StaffID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    StaffName : {
        type : Sequelize.STRING,
        allowNull: false
    },
    RoleID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    //Sqlite doesnt have boolean function,so considering it as integer :0,1
    DateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Address : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    DateOfJoining : {
        type : Sequelize.DATE,
        allowNull : false
    },
    DateOfResignation : {
        type : Sequelize.DATE,
        allowNull: false
    },
    Remarks : {
        type  : Sequelize.TEXT,
        allowNull : true
    }
})

module.exports = Staff;