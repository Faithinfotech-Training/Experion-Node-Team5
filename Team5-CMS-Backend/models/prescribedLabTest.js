
const Sequelize = require("sequelize");
const db = require("../config/database");


const PrescribedLabTest = db.define("prescribedLabTest", {
    MedicinePrescriptionID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    MasterLabTestID1: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    MasterLabTestID2: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    MasterLabTestID3: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  });

  module.exports = PrescribedLabTest;