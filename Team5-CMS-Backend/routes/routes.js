const express = require('express');
const router = express.Router();
const roleRoutes = require('./cms.route');

router.use('/roles', roleRoutes);
module.exports = router;