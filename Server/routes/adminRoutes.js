
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const { verifyAdminToken } = require('../middleware/authMiddleware');



router.get('/applications', verifyAdminToken,adminController.getAllApplications);
// router.get('/applications', adminController.getAllApplications);
router.post('/applications/:id/approve', adminController.approveApplication);
router.post('/applications/:id/reject', adminController.rejectApplication);

module.exports = router;