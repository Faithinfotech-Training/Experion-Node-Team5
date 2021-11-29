const express = require('express');
const router = express.Router();
const roleRoutes = require('./role.route');
const doctorRoutes = require('./doctor.route')
const labReportRoutes = require('./labReport.routes')
const masterMedicineRoutes = require('./masterMedicine.routes')
const patientRoutes = require('./patient.route')
const prescribedMedicineRoutes = require('./prescribedMedicine.route')
const specializationsroutes = require('./specialization.route')
const appointmentRoutes = require('./appointment.route')
const authenticationRoutes = require('./authentication.route')
const staffRoutes = require('./staff.route');
const prescriptionsRoutes = require('./prescriptions.route')
const masterLabTestRoutes = require('./masterLabTest.route')
const prescribedLabTestRoutes = require('./prescribedLabTest.route')
const patientLogRoutes = require('./patient.route')
const { route } = require('./staff.route');

router.use('/roles', roleRoutes);
router.use('/doctors',doctorRoutes)
router.use('/labreports',labReportRoutes)
router.use('/mastermedicines',masterMedicineRoutes)
router.use('/patients',patientRoutes)
router.use('/prescribedmedicines',prescribedMedicineRoutes)
router.use('/specializations',specializationsroutes)
router.use('/appointments',appointmentRoutes)
router.use('/authentications',authenticationRoutes)
router.use('/staffs',staffRoutes)
router.use('/prescriptions',prescriptionsRoutes)
router.use('/masterlabtests',masterLabTestRoutes)
router.use('/prescribedlabtests',prescribedLabTestRoutes)
router.use('/patientlogs',patientLogRoutes)

module.exports = router;