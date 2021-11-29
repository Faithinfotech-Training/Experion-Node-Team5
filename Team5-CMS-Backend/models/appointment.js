const Sequelize = require("sequelize");
const db = require("../config/database");

const Appointment = db.define("appointment", {
    AppointmentID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PatientID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    DoctorID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    AppointmentDate : {
        type : Sequelize.DATE,
        allowNull : false
    },
    AppointmentTime: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    ContactNo: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  module.exports = Appointment