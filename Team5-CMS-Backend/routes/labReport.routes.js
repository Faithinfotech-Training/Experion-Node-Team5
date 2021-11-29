const express = require('express');
const router = express.Router();
const labReportController = require('../controller/labReport.controller');

router.post('/', labReportController.addLabReport);
router.get('/', labReportController.findLabReports);
router.get('/:LabReportID', labReportController.findLabReportById);
router.put('/:LabReportID', labReportController.updateLabReport);
router.delete('/:LabReportID', labReportController.deleteById);

module.exports = router;
