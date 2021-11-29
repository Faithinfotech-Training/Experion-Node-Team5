const Sequelize = require('sequelize');
const db = require('../config/database');



//PatientLogTable
const PatientLog = db.define('patientLog', {
    PatientID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    DoctorID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    DoctorNotes: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    PreviousMedicineHistory: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    PatientDiseaseHistory: {
        type: Sequelize.TEXT,
        allowNull: true
    }
    
    

})


module.exports = PatientLog;






