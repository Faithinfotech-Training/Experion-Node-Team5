const Sequelize = require("sequelize");
const db = require("../config/database");

const Role = db.define("role", {
  RoleID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  RoleName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

const Patients = db.define("patients", {
  PatientsId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  DoctorId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  AppId: {
    type: Sequelize.TEXT,
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
});

const MedPres = db.define("medicinePrescribed", {
  MedicinePrescriptionID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  MedicineId1: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  MedicineId2: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  MedicineId3: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  MedicineId4: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  Dosage: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});
const Appointments = db.define("appointments", {
  AppointmentId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PatientId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  DoctorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
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

module.exports = Role;
module.exports = Patients;
module.exports = MedPres;
module.exports = Appointments;
