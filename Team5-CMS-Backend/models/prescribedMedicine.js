
const Sequelize = require("sequelize");
const db = require("../config/database");


const PrescribedMedicines = db.define("prescribedMedicines", {
    MedicinePrescriptionID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    MasterMedicineID1: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    Dosage1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    MasterMedicineID2: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Dosage2: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    MasterMedicineID3: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Dosage3: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    MasterMedicineID4: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Dosage4: {
      type: Sequelize.TEXT,
      allowNull: false,
    }
  });

  module.exports = PrescribedMedicines;