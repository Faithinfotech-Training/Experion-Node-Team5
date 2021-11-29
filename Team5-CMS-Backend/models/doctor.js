const Sequelize = require('sequelize');
const db = require('../config/database');


const Doctor = db.define('doctor',{
    DoctorID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    DoctorName : {
        type : Sequelize.STRING,
        allowNull: false
    },
    SpecizalizationID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    //Sqlite doesnt have boolean function,so considering it as integer :0,1
    IsDocAvailable: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
})

module.exports = Doctor;