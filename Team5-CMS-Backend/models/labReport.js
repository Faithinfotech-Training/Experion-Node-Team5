const Sequelize = require('sequelize');
const db = require('../config/database');



const LabReport = db.define('labreport',{
    LabReportID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PatientID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    DoctorID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    LabTechnicianID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    CheckIn: {
        type: Sequelize.DATE,
        allowNull: false
    },
    CheckOut: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Comments: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = LabReport;
