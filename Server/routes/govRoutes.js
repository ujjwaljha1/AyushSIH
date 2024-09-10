const express = require('express');
const router = express.Router();
const govController = require('../controllers/govController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware.verifyGovToken);

router.get('/approved-applications', govController.getApprovedApplications);
router.post('/applications/:id/release-payment', govController.releasePayment);

module.exports = router;

