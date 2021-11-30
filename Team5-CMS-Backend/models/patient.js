const Sequelize = require("sequelize");
const db = require("../config/database");
const Patients = db.define("patients", {
  PatientID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  DoctorID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  AppointmentID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  PatientName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ContactNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Email : {
      type : Sequelize.STRING,
      allowNull : true
  },
  DateOfBirth : {
      type : Sequelize.DATE,
      allowNull : false
  },
  Age : {
    type : Sequelize.INTEGER,
    allowNull : false
  },
  Address : {
      type : Sequelize.TEXT,
      allowNull : false
  },
  BloodGroup : {
      type : Sequelize.STRING,
      allowNull : false
  }
});

module.exports = Patients;