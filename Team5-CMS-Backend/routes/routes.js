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
router.use('/doctor',doctorRoutes)
router.use('/labreport',labReportRoutes)
router.use('/mastermedicine',masterMedicineRoutes)
router.use('/patient',patientRoutes)
router.use('/prescribedmedicine',prescribedMedicineRoutes)
router.use('/specializations',specializationsroutes)
router.use('/appointments',appointmentRoutes)
router.use('/authentication',authenticationRoutes)
router.use('/staff',staffRoutes)
router.use('/prescriptions',prescriptionsRoutes)
router.use('/masterlabtests',masterLabTestRoutes)
router.use('/prescribedlabtest',prescribedLabTestRoutes)
router.use('/patientlog',patientLogRoutes)

module.exports = router;