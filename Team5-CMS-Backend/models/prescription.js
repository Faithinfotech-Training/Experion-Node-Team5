const Sequelize = require('sequelize');
const db = require('../config/database');


const Prescriptions = db.define('prescriptions',{
    PrescriptionsID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PatientID : {
        type : Sequelize.INTEGER,
        allowNull: false
    },
    DoctorID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    //Sqlite doesnt have boolean function,so considering it as integer :0,1
    MedicinePrescriptionID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    LabPrescriptionID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    DateOfVisit : {
        type : Sequelize.DATE,
        allowNull : false
    }
})

module.exports = Prescriptions;